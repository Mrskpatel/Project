const express = require("express");
const routes = express.Router();
const ProductCtl = require("../controllers/ProductCtl");
const multer = require("multer");
const passport = require("passport");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const Uploadspic = multer({ storage: Storage }).single("ProductImage");

routes.post("/addProduct", ProductCtl.addproduct);
routes.post("/insserProduct", Uploadspic , ProductCtl.insserProduct);
routes.get("/viewProduct", ProductCtl.viewProduct);
routes.delete("/deleteProduct", ProductCtl.deleteProduct);
routes.get("/editProduct", ProductCtl.editProduct);
routes.put("/updateProduct", ProductCtl.updateProduct);


module.exports = routes;