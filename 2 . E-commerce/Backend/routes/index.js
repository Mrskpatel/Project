const express = require("express");
const routes = express.Router();
const adminCtl = require("../controllers/adminCtl");
const passport = require("passport");

routes.post("/registor" , adminCtl.registor);
routes.post("/login" , adminCtl.login);
routes.get("/logout" , adminCtl.Logout);

module.exports = routes;