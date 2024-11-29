const express = require("express");
const route = express.Router();
const Categoryctl = require('../controllers/CategoryCtl')
const passport = require("passport");

route.post("/addCategory", Categoryctl.addCategory);
route.get("/viewCategory",  Categoryctl.viewCategory);
route.delete("/deleteCategory/:id", Categoryctl.deleteCategory);
route.get("/editCategory", Categoryctl.editCategory);
route.put("/updateCategory", Categoryctl.updateCategory);
module.exports = route;