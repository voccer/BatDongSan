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
  gia: {
    type: Number,
    required: true
  },
  moTa: {
    type: String
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
        type: String
      },
      soPhongNgu: {
        type: String
      },
      soToilet: {
        type: String
      },
      noiThat: {
        type: String
      }
    }
  ],
  hinhAnh1: { type: String },
  hinhAnh2: { type: String },
  hinhAnh3: { type: String }
});
module.exports = mongoose.model("sell", SellSchema);
