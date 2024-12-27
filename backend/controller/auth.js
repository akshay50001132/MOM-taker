const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
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
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    // 30 days in milliseconds
    const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: THIRTY_DAYS_IN_MS,
      })
      .json(user);
  } catch (error) {
    console.log(error);
    if (error.code == "11000") {
      return res.status(500).json({
        message: "This email is already registered. Please try logging in.",
      });
    }
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(500).send({
        message:
          "No account found with this email. Please sign up to create a new account",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // Signing token
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

      // 30 days in milliseconds
      const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

      return res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          maxAge: THIRTY_DAYS_IN_MS,
        })
        .json(user);
    } else {
      res.status(500).send({ message: "Incorrect password. Try again." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error, please try again later" });
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
  signup,
  logout,
};
