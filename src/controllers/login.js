const { verificarCredenciales } = require("../db/consultas");

const jwt = require("jsonwebtoken");
const secretKey = require("../utils/utils");

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    await verificarCredenciales(username, password);
    // console.log(secretKey);

    const token = jwt.sign({ username }, secretKey);
    // console.log(token);

    res.send({ token });
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

module.exports = { loginController };
