const User = require("../models/User");

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
// Register logic
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
    res.status(201).json({
      message: "Registration Succussfully !",
      token: await userCreated.generateToken(),
    });
  } catch (error) {
    res.status(400).json("internal server error");
    next(error);
  }
};

//--------------
// login logic
//------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "invalid credential" });
    }

    const isPasswordValid = await userExist.comparePassword(password);
    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Succussfully!",
        token: await userExist.generateToken(),
        user: userExist,
      });
    } else {
      res.status(401).json({ message: "invalid email and password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

module.exports = { home, register, login };
