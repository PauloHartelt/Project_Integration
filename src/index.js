const express = require('express');

const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());

const router = require('./router');

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3000);