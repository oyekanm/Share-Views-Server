const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { Users } = require("../models");

const AuthenticateMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.header("accessToken");
  // console.log(token);
 
    const accessToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = accessToken.user;
    next();
});

module.exports = { AuthenticateMiddleware };
