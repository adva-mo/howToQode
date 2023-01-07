const { mongoose, Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
const date = new Date();

const userSchema = new mongoose.Schema(
  {
    username: {
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
      trim: true,
      minlength: 6,
    },
    img: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      trim: true,
      default: `new user`,
    },
    lastName: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      trim: true,
      default: "",
    },
    country: {
      type: String,
      trim: true,
      default: "",
    },
    rank: {
      type: String,
      default: "begginer",
    },
    learning: {
      type: String,
      trim: true,
      default: "",
    },
    school: {
      type: String,
      trim: true,
      default: "",
    },
    solvedQuestions: {
      type: Number,
      default: 0,
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
);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;
