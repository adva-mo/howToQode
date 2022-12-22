const { mongoose, Schema } = require("mongoose");
const date = new Date();

const Comment =
  //   "Comment",
  new Schema(
    {
      author: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },
      isHelpful: {
        type: Boolean,
        default: false,
      },
      //   comments: {
      //     type: Array,
      //   },
      date: {
        type: String,
        default: date.toLocaleDateString(),
      },
      time: {
        type: String,
        default: date.toLocaleTimeString(),
      },
    }
    //   )
  );

module.exports = Comment;
