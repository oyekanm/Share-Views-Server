const asyncHandler = require("express-async-handler");
const { Users } = require("../models");
const { generateToken } = require("../utils/generateToken");
const bycryptjs = require("bcryptjs");

const findSingleUser = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await Users.findByPk(id);
  if (user) {
    res.json({
      createdAt: user.createdAt,
      id: user.id,
      updatedAt: user.updatedAt,
      username: user.username,
    });
  }
});
 
const AuthenticateUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  // console.log({ username, password });
  const user = await Users.findOne({ where: { username: username } });
  if (user) {
    const match = await bycryptjs.compare(password, user.password);
    //  console.log(match);
    if (match) {
      const token = generateToken({ id: user.id, username: user.username });
      res.status(200).json({ token, id: user.id, username: user.username });
    }
  } else {
    res.status(401);
    throw new Error(`User doesn't exist!!! \n Register your info.`);
  }
});
const Auth = asyncHandler(async (req, res) => {
  res.json(req.user);
});
const CreateUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  // console.log({ username, password });
  const user = await Users.findOne({ where: { username: username } });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  const UserCreate = await Users.create({ username, password });

  if (UserCreate) {
    const token = generateToken({
      id: UserCreate.id,
      username: UserCreate.username,
    });

    res
      .status(201)
      .json({ token, id: UserCreate.id, username: UserCreate.username });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
module.exports = { AuthenticateUser, CreateUser, Auth, findSingleUser };
