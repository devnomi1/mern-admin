const User = require("../models/User");
const bcrypt = require("bcrypt");
// *-----------
// home logic
// *-----------

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to the home using controll and router ");
  } catch (error) {
    console.log(error);
  }
};

// *-----------
// home logic
// *-----------

const register = async (req, res) => {
  try {
    const { userName, email, password, phone } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "email is already exist" });
    }

    const userCreated = await User.create({
      userName,
      email,
      phone,
      password,
    });
    res
      .status(201)
      .json({
        message: "Registration Succussfully !",
        token: await userCreated.generateToken(),
      });
  } catch (error) {
    res.status(400).json("internal server error");
  }
};

module.exports = { home, register };
