const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

}, {
    timestamps: true,
})

module.exports = mongoose.model("product", productSchema); 