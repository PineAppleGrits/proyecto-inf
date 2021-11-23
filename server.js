const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
// Importing Routes
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    transport: ['websocket', 'polling', 'flashsocket'],
    origin: ['http://localhost:3000', 'http://localhost'],
    methods: ['GET', 'POST'],
    credentials: false,
  },
});
const users = require('./routes/api/users');
const messages = require('./routes/api/messages');
const channels = require('./routes/api/channels');
const servers = require('./routes/api/servers');
const apiIndex = require('./routes/api/index');
// Initializing express and socketio
const port = process.env.PORT || 5000;
const log = require('./logger');

app.use(cors());
// Exporting socket io
exports.socket = { io };
require('./socket');
// Initializing Database
require('./db');

app.use((req, res, next) => {
  // allow access from every, elminate CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.removeHeader('x-powered-by');
  // set the allowed HTTP methods to be requested
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  // headers clients can use in their requests
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // allow request to continue and be handled by routes
  next();
});

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// passport middleware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

// routes
app.use('/api/users', users);
app.use('/api/messages', messages);
app.use('/api/channels', channels);
app.use('/api/servers', servers);
app.use('/api', apiIndex);

// Production == true? then serve build
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(port, () => {
  log(`Backend is running on port ${port}`, 'success');
});
