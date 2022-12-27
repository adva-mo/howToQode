const { Schema } = require("mongoose");

const Comment = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = Comment;
