const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      validate(email) {
        if (!isEmail(email)) {
          throw new Error("Invalid Email address.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      min: 6,
      trim: true,
      validate(password) {
        if (password.trim().length < 6)
          throw new Error("Password is too short");
      },
    },
    profilePicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      dafault: [],
    },
    followings: {
      type: Array,
      dafault: [],
    },
    isAdmin: {
      type: Boolean,
      dafault: false,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  // removes password and tokens before sending to client
  const user = this;
  const userObj = user.toObject();
  delete userObj.tokens;
  delete userObj.password;
  return userObj;
};

UserSchema.methods.getAuthToken = async function () {
  const user = this;

  try {
    const token = await jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7 days" }
    );
    return token;
  } catch (err) {
    return null;  
  }
};

// hash password before saving
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  next();
});

module.exports = mongoose.model("User", UserSchema);
