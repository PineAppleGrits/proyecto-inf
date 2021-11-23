const mongoose = require('mongoose');

const { Schema } = mongoose;
const Channel = require('./Channel');
// Create Schema
const ServerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    channels: {
      type: Map,
      of: {
        type: 'ObjectId',
        ref: 'Channel',
      },
      default: {},
    },
    image: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    members: {
      type: Map,
      of: {
        type: 'ObjectId',
        ref: 'User',
      },
      default: {},
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
ServerSchema.pre('deleteOne', { document: true, query: false }, async function () {
  let count = 0;
  for await (const doc of User.find().select('servers')) {
    if (doc.servers.get(this._id)) {
      doc.servers.set((this._id), undefined);
      await doc.save();
      count++;
    }
  }
  console.log(`Server ${this.name} deleted, ${count} Users updated`);
});

// Only query middleware. This will get called when you do `Model.remove()`
// but not `doc.remove()`.
ServerSchema.pre('remove', { query: false, document: true }, async function () {
  let count = 0;
  for await (const doc of User.find().select('servers')) {
    if (doc.servers.get(this._id)) {
      doc.servers.set((this._id), undefined);
      await doc.save();
      count++;
    }
  }
  console.log(`Server ${this.name} deleted, ${count} Users updated`);
});
const Server = mongoose.model('Server', ServerSchema);
module.exports = Server;
