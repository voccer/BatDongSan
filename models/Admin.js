const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const AdminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: true
  }
});
module.exports = Admin = mongoose.model("admins", AdminSchema);
