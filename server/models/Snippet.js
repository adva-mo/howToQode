const { mongoose, Schema } = require("mongoose");
const Answer = require("./Answer.js");
const date = new Date();

const Snippet = mongoose.model(
  "Snippet",
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
      language: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      solved: {
        type: Boolean,
        default: false,
      },
      answers: [Answer],
      code: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        default: date.toLocaleDateString(),
      },
      time: {
        type: String,
        default: date.toLocaleTimeString(),
      },
    },
    { timestamps: true }
  )
);

module.exports = Snippet;
