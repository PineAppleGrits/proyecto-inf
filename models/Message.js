const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const MessageSchema = new Schema(
  {
    channel_id: {
      type: Schema.Types.ObjectId,
      ref: 'channels',
      required: false,
    },
    message_author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
