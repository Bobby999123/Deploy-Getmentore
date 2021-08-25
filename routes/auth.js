const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");

router.post(
  "/register",
  [
    body("username").isLength({ min: 3, max: 30 }),
    body("email").isEmail().isLength({ max: 50 }),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //create new user
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      // generate jwt token and add it to user's token array
      const token = await user.getAuthToken();
      user.tokens = user.tokens.concat({ token });

      // save user
      await user.save();
      return res.status(200).json({ user, token });
    } catch (err) {
      console.log(err);
      if (err.keyPattern.username === 1) {
        return res.status(400).json("username already exists");
      }
      if (err.keyPattern.email === 1) {
        return res.status(400).json("User with this email already exists");
      }
      res.status(500).json(err);
    }
  }
);

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("user not found");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json("wrong password");
    }

    // jwt token
    const token = await user.getAuthToken();
    user.tokens = user.tokens.concat({ token });

    await user.save();
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGOUT
// PROTECTED ROUTE
router.post("/logout", auth, async (req, res) => {
  const { user } = req;
  try {
    user.tokens = user.tokens.filter((token) => token.token !== req.token);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGOUT ALL DEVICES
// PROTECTED ROUTE
router.post("/logoutAll", auth, async (req, res) => {
  const { user } = req;
  try {
    user.tokens = [];
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
