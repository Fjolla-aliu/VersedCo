/* eslint-disable no-undef */
const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    Name: String,
    updated_date:{type:Date, default: Date.Now}
});

module.exports = mongoose.model('Category',CategorySchema);