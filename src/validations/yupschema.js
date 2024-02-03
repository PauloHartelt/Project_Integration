const yup = require('./yup');

const userValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup
    .string()
    .required()
    .min(6)
    .trim('O campo senha precisa ter caracteres válidos')
});

const passwordValidation = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha_antiga: yup.string().required(),
  senha_nova: yup.string().required().min(6)
});

module.exports = {
  userValidation,
  passwordValidation
};