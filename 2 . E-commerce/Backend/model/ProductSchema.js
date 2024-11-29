const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    ProductDescription: {
        type: String,
        required: true,
    },
    ProductPrice: {
        type: Number,
        required: true,
    },
    ProductDiscountPrice: {
        type: Number,
        required: true,
    },
    ProductRating: {
        type: Number,
        required: true,
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
    },
    ProductImage : {
        type: String,
        required: true
    }
},{timestamps : true});

const Product = mongoose.model("Product", CategorySchema);

module.exports = Product;
