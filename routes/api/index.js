const express = require('express');

const router = express.Router();

// Load User model
const User = require('../../models/User');
const Server = require('../../models/Server');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/join/', async (req, res) => {
  const { serverId, userId } = req.body;
  try {
    const server = await Server.findById(serverId);
    const user = await User.findById(userId);
    server.members.set(userId, userId);
    user.servers.set(serverId, serverId);
    await server.save();
    await user.save();
    const updatedServer = await Server.findById(serverId).populate(['channels', 'members']);
    res.status(200).json(updatedServer);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
router.post('/leave/', async (req, res) => {
  const { serverId, userId } = req.body;
  try {
    const server = await Server.findById(serverId);
    const user = await User.findById(userId);
    server.members.set(userId, undefined);
    user.servers.set(serverId, undefined);
    await server.save();
    await user.save();
    const updatedUser = await User.findById(userId).populate(['servers']);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
