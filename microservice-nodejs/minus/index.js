const express = require('express');
const { LoggerMiddleware } = require('./middleware/LoggerMiddleware');
const { numberFormatException } = require('./middleware/NumberFormatException');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 1994

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(LoggerMiddleware)


app.use('/api', require('./routes/MinusRoute'))

app.use(numberFormatException)

app.listen(PORT, () => {
    console.log(`Minus Server started on ${PORT}`);
})