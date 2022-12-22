const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    //email!
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      //todo validaot to check if !isEmaail and throw an error
    },
  },
  password: {
    type: String,
    // required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      //todo
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
