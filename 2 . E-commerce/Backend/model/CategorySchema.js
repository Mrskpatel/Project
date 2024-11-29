const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    }
},{timestamps : true})

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;