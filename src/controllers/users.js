const connection = require('../conection');

const bcrypt = require('bcrypt');

const { displayError, runResponse } = require('../supplements');

const {userValidation} = require('../validations/yupschema');

const registerUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    await userValidation.validate(req.body);
  } catch (error) {
    displayError(error, res);
  }
  try {
    const query = "SELECT * FROM dim_users WHERE email = $1";

    const checkEmail = await connection.query(query, [email]);

    if (checkEmail.rowCount > 0) {
      return res.status(400).json({
        message: "There is already a registered user with the email provided."
      })}

    const encryptedPassword = await bcrypt.hash(senha, 10);

    const registration = await connection.query(
      "INSERT INTO dim_users (nome, email, senha) VALUES ($1, $2, $3) RETURNING *",
      [nome, email, encryptedPassword]
    );
    if (registration.rowCount === 0) {
      return res.status(400).json({ message: "Unable to register user" });
    }
    return runResponse(201, 'Usuário cadastrado com sucesso.', res);
  } catch (error) {
    displayError(error, res);
  }
};

module.exports = {
  registerUser,
  runResponse,
  displayError};