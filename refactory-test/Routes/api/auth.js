const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../../Middleware/auth");

const User = require("../../Model/Account");

// @route   Get login
// #desc    get info account
// @access  Auth

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route       POST login
// @desc        Login with email & password
// @access      Auth
router.post(
  "/",
  [
    check("email", "Email doesn't valid").isEmail(),
    check("password", "Password must be contain min 6 caracter").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // jika terjadi error
      return res.status(400).json({ errors: errors.array() }); // bad request 400, dengan errors.array utk menampilkan error yg terjadi
    }

    const { email, password } = req.body;

    try {
      // apakah email posko benar?
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "email / password salah" }],
        });
      }

      //   apakah password benar?
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: "email / password salah" }],
        });
      }
      //   res.send("User berhasil terdaftar");
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, // expiresIn set ke 3600 second / 1 jam expired.
        (err, token) => {
          if (err) throw err;
          // tampilkan token
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
