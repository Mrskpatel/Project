const express = require("express");
const port = 1085
const db = require("./config/Database");
const path = require("path");
const app = express();
app.use(express.json())
app.use(express.urlencoded());
const session = require("express-session");
const passport = require("passport");
const localst = require("./config/Passport");
const cors = require('cors');

app.use(
  session({
    name: "demo",
    secret: "keyboard",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 },
  })
);
app.use(cors({origin : 'http://localhost:5173',credentials:true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setauthuser);
const routes =  require("./routes/index")
const route = require("./routes/Category");
const SubRoute = require("./routes/subCategory");
const ProductRoute = require("./routes/Product");
const exp = require("constants");

app.use("/",routes)
app.use("/Category", route);
app.use("/subCategory", SubRoute);
app.use("/Product", ProductRoute);

app.use("/uploads/", express.static(path.join(__dirname, "uploads/")));                                                                                             

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server is running on port " + port);
});
