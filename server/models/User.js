const { mongoose, Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

const userSchema = new mongoose.Schema({
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

// userSchema.pre("save", async function (next) {
//   console.log("pre-save");
//   next();
// });

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;
