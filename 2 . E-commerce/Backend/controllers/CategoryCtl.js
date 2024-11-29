const UserCategory = require("../model/CategorySchema");
const Subcategory = require("../model/subCategorySchema");
const mongoose = require("mongoose");
let path = require("path");
const fs = require("fs");

module.exports.addCategory = async (req, res) => {
  const addCategory = await UserCategory.create(req.body);
  if (addCategory) {
    res.status(200).json({ msg: "Category Added Successfully" })
  }
  else {
    req.status(400).json({ msg: "Failed to Add Category" })
  }
};

module.exports.viewCategory = async (req, res) => {
  try {
    const data = await UserCategory.find({});
    data ? res.status(200).json(data) : res.status(400).json({ msg: "Data Not Found" })
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteCategory = async (req, res) => {
  console.log(req.params.id)
  try {
    const singaldata = await UserCategory.findById(req.params.id)

    const data = await UserCategory.findByIdAndDelete(req.params.id);

    await Subcategory.deleteMany({ categoryId: req.params.id });

    data ? res.status(200).json({ msg: "delete successfully" }) : res.status(400).json({ msg: "Data Not Delete" })
  } catch (err) {
    console.log(err);
  }
};

module.exports.editCategory = async (req, res) => {
  try {
    const editdata = await UserCategory.findById(req.query.id);
    editdata ? res.status(200).json({ msg: "Data Edit successfully", editdata }) : res.status(400).json({ msg: "Data Not Edit" })
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    const update = await UserCategory.findById(req.query.id);

    const updateData = req.body;

    const updateCategory = await UserCategory.findByIdAndUpdate(update, updateData);

    updateCategory ? res.status(200).json({msg : "Category Updated successfully"}) : res.status(400).json({msg : "Category Not Update successfully"})

  } catch (error) {
    console.log(error);

  }
};