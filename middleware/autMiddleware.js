const jwt = require('jsonwebtoken');
const secretKey = require('../utils/utils')

const autMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No se encontro el token" });
    }
  
    try {
      const payload = jwt.verify(token, secretKey);
      req.user = payload;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).send({ error: "Invalid token" });
    }
};

module.exports = { 
    autMiddleware 
}