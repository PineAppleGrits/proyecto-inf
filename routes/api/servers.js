const express = require('express');
const Server = require('../../models/Server');
const User = require('../../models/User');
const Channel = require('../../models/Channel');

const router = express.Router();
// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/', async (req, res) => {
  const { name, owner } = req.body;
  const newServer = new Server({
    name,
    owner,
    channels: {},
    members: {},
    image: `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}&background=2C2F33&color=fff&rounded=true&size=500&format=png&length=${name.split(' ').length < 5 ? name.split(' ').length : 4}`,
  });
  const exampleChannel = new Channel({
    name: 'example-channel',
  });

  try {
    const user = await User.findById(owner);
    if (!user.servers) user.servers = {};
    user.servers.set(newServer._id, newServer._id);
    newServer.members.set(owner, owner);
    newServer.channels.set(exampleChannel._id, exampleChannel._id);
    await exampleChannel.save();
    await user.save();
    const savedServer = await newServer.save();
    return res.status(200).json(savedServer);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
  return false;
});
router.get('/:serverId', async (req, res) => {
  try {
    if (!req.params.serverId || req.params.serverId === undefined) {
      return null;
    }
    console.log(req.params.serverId);
    Server.findById(req.params.serverId).populate(['channels', 'members']).then((doc) => {
      console.log('Document', doc);
      const obj = {
        name: doc.name,
        channels: [...doc.channels].map(([name, value]) => (value)),
        members: [...doc.members].map(([name, value]) => (value)),
        image: doc.image,
      };
      return res.status(200).json(obj);
    }).catch((e) => {
      console.error(400, { params: req.params.serverId });
      res.status(500).json(e);
    });
  } catch (err) {
    console.error(err, { params: req.params.serverId });
    res.status(500).json(err);
  }
});
router.delete('/:serverId/:channelId', async (req, res) => {
  try {
    const server = await Server.findById(req.params.serverId);
    server.channels.set(req.params.channelId, undefined);
    await server.save();
    res.status(200).json(server);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete('/channel/:channelId', async (req, res) => {
  try {
    const server = await Server.findById(req.params.serverId).select('channels');
    await server.save();
    res.status(200).json(server);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
