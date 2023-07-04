const jwt = require("jsonwebtoken");

const fetchPerson = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) {
      return res
        .status(401)
        .send({ statusText: statusText.TOKEN_NOT_FOUND, isLoggedIn: false });
    }
  
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.mongoId = data.person.mongoId;
  
      next();
    } catch (err) {  
      res.status(401).json({ success: false, message: "Invalid token" });
    }
  };

module.exports = fetchPerson;