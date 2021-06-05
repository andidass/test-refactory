const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const UserGoogle = require("../../Model/AccountGoogle");

// @route       POST registration/google
// @desc        Broker Registration
// @access      Public
router.post(
  "/",
  [check("email", "email doesn't valid").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // jika terjadi error
      return res.status(400).json({ errors: errors.array() }); // bad request 400, dengan errors.array utk menampilkan error yg terjadi
    }

    const { email } = req.body;

    try {
      // apakah email exist?
      let user = await UserGoogle.findOne({ email });
      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: "account is already registered, please login",
            },
          ],
        });
      }

      user = new UserGoogle({
        email,
      });

      // save to db
      await user.save();

      // return jsonwebtoken for access protected route
      // res.send("account registered");
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 }, // expiresIn set ke 3600 second / 1 jam expired.
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
