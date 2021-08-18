const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const log = require('./logger');

// Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => log('MongoDB has been successfully connected.', 'success'))
  .catch((err) => log(err, 'error', __filename, true));
