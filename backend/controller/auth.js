const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // hashing password to be stored in encrypted form
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating new user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    // Signing token
    const token = jwt.sign({ id: user._id }, process.env.secret);

    // 30 days in milliseconds
    const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: THIRTY_DAYS_IN_MS,
      })
      .json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "")
      .send({ message: "logout successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

module.exports = {
  login,
  logout,
};
