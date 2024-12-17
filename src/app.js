const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('../routes/v1/userRoutes');

app.use(cors());
app.use(express.json());
app.use('/v1/users', userRoutes);

module.exports = app;
