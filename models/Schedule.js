const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ScheduleSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: "admins"
  },
  sell: {
    type: Schema.Types.ObjectId,
    ref: "sells"
  },
  buy: {
    type: Schema.Types.ObjectId,
    ref: "buys"
  },
  from: {
    type: Date,
    required: true,
    default: Date.now()
  },
  to: {
    type: Date,
    required: true,
    default: Date.now()
  }
});
module.exports = Schedule = mongoose.model("schedule", ScheduleSchema);
