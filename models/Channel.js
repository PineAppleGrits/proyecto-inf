const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  messages: [
        {
      type: Schema.Types.ObjectId,
      ref: 'messages',
    },
    
  ]
});

const Channel = mongoose.model('channels', ChannelSchema);
module.exports = Channel;