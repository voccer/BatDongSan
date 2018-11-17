const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ScheduleSchema = new Schema({
  sell: {
    type: Schema.Types.ObjectId,
    ref: "sell"
  },
  buy: {
    type: Schema.Types.ObjectId,
    ref: "buy"
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
module.exports = Schedule = mongoose.model("schedule", ScheduleSchema);
