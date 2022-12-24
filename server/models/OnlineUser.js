const { mongoose, Schema } = require("mongoose");

const OnlineUser = mongoose.model(
  "OnlineUser",
  new Schema({
    socket: {
      type: String,
      require: true,
    },
  })
);

module.exports = OnlineUser;
