/* eslint-disable no-undef */
const mongoose = require('mongoose');

const OrdertSchema = mongoose.Schema({
    UserID: String,
    ProductID: String,
    Quantity: Number,
    Status:String,
    updated_date:{type:Date, default: Date.Now}
});

module.exports = mongoose.model('Order',OrdertSchema);