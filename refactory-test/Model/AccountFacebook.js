const mongoose = require("mongoose");

const AccountFacebookSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = AccountFacebook = mongoose.model(
  "accountfacebook",
  AccountFacebookSchema
);
