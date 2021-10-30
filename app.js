const express = require('express');
const troopRouter = require('./routes/troops')
const app = express()
app.use('/troops', troopRouter)

module.exports = app;