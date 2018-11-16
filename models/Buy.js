const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const BuySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  moTa: [
    {
      title: {
        type: String,
        required: true
      },
      noiDung: {
        type: String,
        required: true
      }
    }
  ],
  hinhThuc: {
    type: String,
    required: true,
    enum: ["sell", "rent"]
  },
  loai: {
    type: String,
    required: true
  },
  tinh: {
    type: String,
    required: true
  },
  quan: {
    type: String,
    required: true
  },
  phuong: {
    type: String
  },
  pho: {
    type: String
  },
  dienTich: {
    type: String
  },
  gia: [
    {
      from: {
        type: Number
      },
      to: {
        type: Number
      }
    }
  ]
});
module.exports = mongoose.model("buy", BuySchema);
