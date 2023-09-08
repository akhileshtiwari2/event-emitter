const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brandL: String,
    category: String,
  });
module.exports = mongoose.model("products", ProductSchema);