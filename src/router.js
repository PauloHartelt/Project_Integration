const express = require('express');

const { registerUser } = require('./controllers/users');

const router = express();

router.post('/cadastrar', registerUser);

module.exports = router;