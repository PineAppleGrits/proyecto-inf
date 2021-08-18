const socketClient = require('./server').socket;

const { io } = socketClient;
const log = require('./logger');
const Message = require('./models/Message');

/**
 * recentMessages.
 *
 * Get most recent Messages of the specified channelID.
 *
 * @access     public
 *
 * @param {string}   channelId           Id of the channel to fetch
 * @return {(object|Array)}               Returns array of the messages.
 */

async function getMostRecentMessages(channelId) {
  try {
    const messagesArray = [];
    const messages = await Message.find({ channel_id: channelId })
      .sort({ date: -1 })
      .limit(50);
    messages.forEach((message) => {
      const msgObj = {
        _id: message._id,
        content: message.content,
        name: message.message_author.name,
      };
      messagesArray.push(msgObj);
    });
    return messagesArray;
  } catch (e) {
    return log(e, 'error', __filename);
  }
}

io.on('connection', (socket) => {
  /** add content here* */
  socket.on('onChannel', (data) => {
    getMostRecentMessages(data)
      .then((results) => {
        socket.emit('mostRecentMessages', results.reverse());
      })
      .catch((error) => {
        log(error, 'error', __filename);
        socket.emit('mostRecentMessages', []);
      });
  });

  socket.on('newChatMessage', (data) => {
    // send event to every single connected socket
    try {
      const message = new Message({
        name: data.name,
        content: data.message,
        message_author: {
          id: data.messageAuthor,
          name: data.name,
        },
        channel_id: data.channel_id,
      });
      message
        .save()
        .then(() => {
          io.emit('newChatMessage', { name: data.name, content: data.message });
        })
        .catch((error) => log(error, 'error', __filename));
    } catch (e) {
      log(e, 'error', __filename);
    }
  });
  socket.on('disconnect', () => {
    log('User disconnected', 'warning', __filename);
  });
});
