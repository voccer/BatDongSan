const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ScheduleSchema = new Schema({
  kindOf: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  }
});
module.exports = Schedule = mongoose.model("users", ScheduleSchema);
