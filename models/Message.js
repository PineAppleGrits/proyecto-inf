const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const MessageSchema = new Schema({
  channel_id: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
    required: false,
  },
  message_author: {
    id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model('messages', MessageSchema);
module.exports = Message;
