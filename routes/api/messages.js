const express = require('express');
// Load User model
//  const Channel = require('../../models/Channel');
const Message = require('../../models/Message');

const router = express.Router();
// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/', async (req, res) => {
  // Form validation
  const { content, channelId, message_author } = req.body;

  const newMessage = new Message({
    channelId,
    content,
    message_author,
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.get('/:channelId', async (req, res) => {
  try {
    const messages = await Message.find({
      channelId: req.params.channelId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
