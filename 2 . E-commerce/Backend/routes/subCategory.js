const express = require("express");
const route = express.Router();
const subCategory = require("../controllers/subCategory");
const passport = require("passport");

route.post("/addSubCategory", subCategory.addSubCategory);
route.get("/viewSubCategory", subCategory.viewSubCategory);
route.delete("/deleteSubCategory", subCategory.deleteSubCategory);
route.get("/editSubCategory", subCategory.editSubCategory);
route.put("/updateSubCategory", subCategory.updateSubCategory);

module.exports = route;