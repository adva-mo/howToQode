const express = require("express");

const {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  logoutUser,
  addUser,
  getUserName,
} = require("../controllers/users.controllers.js");

const usersRouter = express.Router();

usersRouter.get("", getUsers);

usersRouter.post("", addUser);

usersRouter.get("/:id", getUser);

usersRouter.patch("/:id", updateUser);

usersRouter.delete("/:id", deleteUser);

usersRouter.post("/register", registerUser);

usersRouter.post("/login", loginUser);

usersRouter.get("/logout", logoutUser);

usersRouter.get("/name/:id", getUserName);

module.exports = usersRouter;
