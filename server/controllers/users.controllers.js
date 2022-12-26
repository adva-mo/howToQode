const User = require("../models/User.js");
const passport = require("passport");

const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    if (!newUser)
      return res.status(404).send("problem while creating the user");
    res.status(201).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("user is not exist");
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).send();
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "lastName", "password"];
  const isUpdateValid = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isUpdateValid) return res.status(400).send("invalid updates");

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(400).send();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send;
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
};

const registerUser = (req, res) => {
  const { password } = req.body;
  const newUser = new User(req.body);
  User.register(newUser, password, (err, user) => {
    if (err) {
      console.log(err.message);
      res.status(404).send(err.message);
    } else {
      passport.authenticate("local")(req, res, () => res.send(newUser));
    }
  });
};

//providing username and password only in body
const loginUser = async (req, res) => {
  try {
    const user = new User(req.body);
    req.login(user, (err) => {
      if (err) throw Error(err);
      passport.authenticate("local")(req, res, () => res.send(user));
    });
  } catch (e) {
    res.status(404).send(e);
  }
};

const logoutUser = (req, res) => {
  console.log("req");
  req.logout();
  res.send("user logged out succesfully");
};

module.exports = {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  logoutUser,
  addUser,
};
