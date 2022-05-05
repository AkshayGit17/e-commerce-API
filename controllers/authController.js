const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');
const { createJWT } = require('../utils');
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = createJWT({ payload });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send('login');
};
const logout = async (req, res) => {
  res.send('logout');
};

module.exports = {
  register,
  login,
  logout,
};
