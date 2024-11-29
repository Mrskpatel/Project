const userProduct = require("../model/ProductSchema");
const userCategory = require("../model/CategorySchema");
const userSubCategory = require("../model/subCategorySchema");
let path = require("path");
const fs = require("fs");

module.exports.addproduct = async (req, res) => {
  try {
    const Category = await userCategory.find({});
    const SubCategory = await userSubCategory.find({})

    res.status(200).json({ Category, SubCategory })
  } catch (err) {
    console.log(err);
  }
}

module.exports.insserProduct = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  

  if (!req.file) {
    res.status(404).json({ msg: "Not Found.." })
  }
  else {
    let image = req.file.path.replace(/\\/g, "/");
    req.body.ProductImage = image;
    console.log(req.body);
    console.log(req.file);
  }
  let data = await userProduct.create(req.body);
  data ? res.status(200).json({ msg: "Product successfully Created" }) : res.status(400).json({ msg: "Something went wrong" })
}

module.exports.viewProduct = async (req, res) => {
  try {
    const data = await userProduct.find({}).populate("Category").populate("subCategory")
    data ? res.status(200).json({ msg: { data } }) : res.status(400).json({ msg: "Data Not Found" })
  } catch (err) {
    console.log(err);
  }
}

module.exports.deleteProduct = async (req, res) => {
  try {
    const singaldata = await userProduct.findById(req.query.id)
    const data = await userProduct.findByIdAndDelete(req.query.id); data ? res.status(200).json({ msg: "delete successfully" }) : res.status(400).json({ msg: "Data Not Delete" })
  } catch (err) {
    console.log(err);
  }
};

module.exports.editProduct = async (req, res) => {
  try {
    const editdata = await userProduct.findById(req.query.id);
    editdata ? res.status(200).json({ msg: "Data Edit successfully", editdata }) : res.status(400).json({ msg: "Data Not Edit" })
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const update = await userProduct.findById(req.query.id);
    const updateData = req.body;
    const updateCategory = await userProduct.findByIdAndUpdate(update, updateData);
    updateCategory ? res.status(200).json({ msg: "Category Updated successfully" }) : res.status(400).json({ msg: "Category Not Update successfully" })
  } catch (error) {
    console.log(error);
  }
};