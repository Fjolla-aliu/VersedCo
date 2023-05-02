/* eslint-disable no-undef */
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    title: String,
    price: String,
    quantity: Number,
    description:String,
    CategoryId: String,
    updated_date:{type:Date, default: Date.Now}
});

module.exports = mongoose.model('Product',ProductSchema);