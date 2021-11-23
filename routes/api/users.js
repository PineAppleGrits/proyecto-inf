const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const utils = require('../../utils')
// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(async (user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.profile_picture = `https://avatars.dicebear.com/api/bottts/${String(newUser._id)}.svg`;
    // Hash password before saving in database
    const discriminatorList = [];
    const matchs = await User.find({ name: this.name }).select({ "discriminator": 1, "_id": 0 });
    if (matchs.length > 9000) {
      return res.status(400).json({ email: 'Name too common' });
    }
    matchs.forEach(user => {
      discriminatorList.push(user.discriminator)
    });
    let discriminator = utils.generateRandom(0001, 9999, discriminatorList)
    discriminator = utils.formatNumber(discriminator, 4);
    newUser.discriminator = discriminator;
    bcrypt.genSalt(10, (saltError, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((resUser) => res.json(resUser))
          .catch((newUserErr) => console.error(newUserErr));
      });
    });
    return false;
  });
  return false;
});

router.post('/', (req, res) => {
  let token = req.body.token.replace("Bearer ", "");
  jwt.verify(token, keys.secretOrKey, function (err, decoded) {
    User.findById(decoded.id).populate("servers").then(async (user) => {
      const arr = [...user.servers].map(([name, value]) => (value));
      let payload = {
        _id: user._id,
        id: user._id,
        name: user.name,
        discriminator: user.discriminator,
        servers: arr,
        email: user.email,
        profile_picture: user.profile_picture,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926, // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`,
          });
        },
      );
      //return res.status(200).json(obj);
    }).catch(e => {
      console.log(e)
      return res.status(400).json(e);
    })
  });

  return false;
});

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId).populate("servers").then(async (user) => {
    const arr = [...user.servers].map(([name, value]) => (value));
    let obj = {
      _id: user._id,
      id: user._id,
      servers: arr,
      email: user.email,
      profile_picture: user.profile_picture,
      discriminator: user.discriminator
    }
    console.log(obj)
    return res.status(200).json(obj);
  }).catch(e => {
    console.log(e)
    return res.status(400).json(e);
  })
  return false;
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email } = req.body;
  const { password } = req.body;

  // Find user by email
  User.findOne({ email }).populate("servers").then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload

        const payload = {
          id: user.id,
          name: user.name,
          discriminator: user.discriminator,
          email: user.email,
          profile_picture: user.profile_picture,
          servers: user.servers
        };


        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          },
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
      return false;
    });
    return false;
  });
  return false;
});

module.exports = router;
