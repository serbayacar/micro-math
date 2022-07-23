const express = require('express');
const { LoggerMiddleware } = require('./middleware/LoggerMiddleware');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(LoggerMiddleware)


app.use('/api', require('./routes/MinusRoute'))

app.listen(PORT, () => {
    console.log(`Minus Server started on ${PORT}`);
})