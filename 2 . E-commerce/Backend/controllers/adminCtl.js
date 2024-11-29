const UserModel = require("../model/AdminSchema");
let path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs')

module.exports.registor = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists..." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({ ...req.body, password: hashedPassword });

    req.session.user = { name, email };
    console.log(req.session.user);
    

    res.status(201).send({
      message: 'User registered successfully',
      user: req.session.user
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.login = async (req, res) => {
  const data = await UserModel.findOne({ email: req.body.email })

  if (data) {
    if (await bcrypt.compare(req.body.password, data.password)) {
      res.status(200).json({ msg: "Login Successfully" })
    }
    else {
      res.status(400).json({ msg: "Internal Server Error." })
    }
  }
  else {
    res.status(404).json({ msg: "User Data Not Found" })
  }
}

module.exports.Logout = (req, res) => {
  req.session.destroy();
  res.status(200).json({ msg: "Logout Successfully" });
};
