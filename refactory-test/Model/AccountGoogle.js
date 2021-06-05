const mongoose = require("mongoose");

const AccountGoogleSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = AccountGoogle = mongoose.model(
  "accountgoogle",
  AccountGoogleSchema
);
