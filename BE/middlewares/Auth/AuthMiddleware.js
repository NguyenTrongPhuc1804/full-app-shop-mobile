var jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    res.status(500).send("login required");
    return;
  }
  token = token.replace("Bearer ", "");
  const decode = jwt.verify(token, "phone_v1");
  try {
    if (decode) {
      req.user = decode;
      next();
    } else {
      res.status(500).send("login required");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  Authenticate,
};
