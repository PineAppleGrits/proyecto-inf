const mongoose = require("mongoose");
const utils = require('../utils');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discriminator: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  servers: {
    type: Map,
    of: {
      type: 'ObjectId',
      ref: 'Server'
    },
    default: {}
  },
  password: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true });
UserSchema.pre("save", async function (next) {
  if(!this.discriminator){
  const discriminatorList = [];
  const matchs = await User.find({name: this.name}).select({ "discriminator": 1, "_id": 0});
  if(matchs.length > 9000){
    return false;
  }
  matchs.forEach(user =>{
    discriminatorList.push(user.discriminator)
  });
  let discriminator = utils.generateRandom(0001,9999,discriminatorList)
  discriminator = utils.formatNumber(discriminator,4);
  this.discriminator = discriminator;
  }
  next();
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
