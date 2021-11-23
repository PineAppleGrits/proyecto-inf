const socketClient = require('./server').socket;

const { io } = socketClient;
const log = require('./logger');
const Message = require('./models/Message');
const User = require('./models/User');

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
      .populate('message_author')
      .sort({ date: -1 })
      .limit(50);
    messages.forEach((message) => {
      const msgObj = {
        _id: message._id,
        content: message.content,
        message_author: message.message_author,
      };
      messagesArray.push(msgObj);
    });
    return messagesArray;
  } catch (e) {
    return log(e, 'error', __filename);
  }
}
async function getServerMostRecentMessages(channelId, serverId) {
  try {
    const messagesArray = [];
    const messages = await Message.find({ channel_id: channelId })
      .sort({ date: -1 })
      .limit(50);

    await Message.find().sort({ date: -1 }).limit(50);
    messages.forEach((message) => {
      const msgObj = {
        _id: message._id,
        content: message.content,
        name: message.message_author.name,
        date: message.date,
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
  socket.on('onServer', (data, serverId) => {
    getServerMostRecentMessages(data, serverId)
      .then((results) => {
        socket.emit('mostRecentMessages', results.reverse());
      })
      .catch((error) => {
        log(error, 'error', __filename);
        socket.emit('mostRecentMessages', []);
      });
  });

  socket.on('newChatMessage', async (data) => {
    // send event to every single connected socket
    try {
      const user = await User.findById(data.message_author);
      const message = new Message({
        content: data.message,
        message_author: user._id,
        channel_id: data.channel_id,
      });
      message
        .save()
        .then(() => {
          io.emit('newChatMessage', { message_author: user, content: data.message, date: message.date });
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
