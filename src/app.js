const express = require('express');
const routes = require('./routes/index');
const morgan = require('morgan');
// const cors = require('cors')
// const { handleErrors } = require('./middlewares/errorsHandler');
// const HandleDatabaseLogs = require('./middlewares/logsMiddleware');
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'))

// app.use(cors({
//     origin: 'http://localhost:5173'
// }))

// routes
app.use('/api', routes)

// Handle errors
// app.use(handleErrors)

module.exports = app;


