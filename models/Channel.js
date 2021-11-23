const mongoose = require('mongoose');
const Server = require('./Server');

const { Schema } = mongoose;

const ChannelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
  },
  { timestamps: true },
);
ChannelSchema.pre('deleteOne', { document: true, query: false }, async function () {
  let count = 0;
  for await (const doc of Server.find().select('channels')) {
    if (doc.channels.get(this._id)) {
      doc.channels.set((this._id), undefined);
      await doc.save();
      count += 1;
    }
  }
  console.log(`Channel ${this.name} deleted, ${count} Servers updated`);
});

// Only query middleware. This will get called when you do `Model.remove()`
// but not `doc.remove()`.
ChannelSchema.pre('remove', { query: false, document: true }, async function () {
  let count = 0;
  for await (const doc of Server.find().select('channels')) {
    if (doc.channels.get(this._id)) {
      doc.channels.set((this._id), undefined);
      await doc.save();
      count += 1;
    }
  }
  console.log(`Channel ${this.name} deleted, ${count} Servers updated`);
});

const Channel = mongoose.model('Channel', ChannelSchema);
module.exports = Channel;
