const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  password: {
    type: String,
    required: [true, "Please add an Password"],
  },
  active: Boolean,
  lastClass: String,
  lastLogin: String,
  isAdmin: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
