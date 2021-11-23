const express = require('express');
// Load User model
const Message = require('../../models/Message');
const Channel = require('../../models/Channel');
const Server = require('../../models/Server');

const router = express.Router();
// @route POST api/users/register
// @desc Register user
// @access Public

router.post('/', async (req, res) => {
  // Form validation
  const { name } = req.body;
  const newChannel = new Channel({
    name,
  });
  try {
    const savedChannel = await newChannel.save();
    if (req.body.serverId) {
      const server = await Server.findById(req.body.serverId, 'channels');
      server.channels.set(newChannel._id, newChannel._id);
      await server.save();
    }
    res.status(200).json(savedChannel);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.get('/:channelId', async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.channelId);

    const messages = await Message.find({
      channelId: channel._id,
    });
    const channelObj = {
      channel,
      messages,
    };
    res.status(200).json(channelObj);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:channelId', async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.channelId);
    const ch = await channel.deleteOne();
    res.status(200).json(ch);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
