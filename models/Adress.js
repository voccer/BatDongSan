const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const AdressSchema = new Schema({
  adress: [
    {
      thanhpho: { type: String }
    }
  ]
});
module.exports = User = mongoose.model("adress", UserSchema);
