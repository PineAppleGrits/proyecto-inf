require('dotenv').config();

module.exports = {
  mongoURI:
    process.env.MONGO_URI || 'mongodb://localhost/discord-copy',
  secretOrKey: process.env.SECRET || 'secret',
};
