const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // hashing password to be stored in encrypted form
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        password = hash;
      });
    });

    const user = await User.create({
      email,
      password,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

module.exports = {
  login,
};
