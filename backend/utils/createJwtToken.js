// import jwt from "jsonwebtoken";
const jwt = require('jsonwebtoken')

const createJwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY_TIME,
  });
};

module.exports = createJwtToken;
