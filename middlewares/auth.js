const jwt = require("jsonwebtoken");
const User = require("../models/User");

// checks if header has a Bearer token
// extracts userID from token, and attaches user info to req
// use req.user to access authorized user

const auth = async (req, res, next) => {
  try {
    if (!req.header?.Authorization) {
      return res
        .status(401)
        .json("authentication token missing. User not authorized");
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY)
      ._id;

    const user = await User.findOne({
      _id: decodedToken,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send("Error: User not authorized");
  }
};

module.exports = auth;
