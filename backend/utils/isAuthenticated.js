const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  // check for token in cookie
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .send({ message: "You are not logged in. Please log in." });
  }

  try {
    // verifying jwt token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // appending userId in request
    req.user = decoded.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "You are not logged in. Please log in." });
  }
};

module.exports = {
  isAuthenticated,
};
