const { mongoose, Schema } = require("mongoose");

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
