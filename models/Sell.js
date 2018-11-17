const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const SellSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  hinhThuc: {
    type: String,
    required: true,
    enum: ["sell", "rent"]
  },
  loai: {
    type: String,
    required: true
  },
  diachi: {
    type: String,
    required: true
  },
  dienTich: {
    type: String,
    required: true
  },
  chiTiet: [
    {
      matTien: {
        type: String
      },
      duongVao: {
        type: String
      },
      huongNha: {
        type: String
      },
      huongBanCong: {
        type: String
      },
      soTang: {
        type: Number
      },
      soPhongNgu: {
        type: Number
      },
      soToilet: {
        type: Number
      },
      noiThat: {
        type: String
      }
    }
  ],
  gia: {
    type: Number,
    required: true
  },
  hinhAnh1: { type: String },
  hinhAnh2: { type: String },
  hinhAnh3: { type: String }
});
module.exports = mongoose.model("sell", SellSchema);
