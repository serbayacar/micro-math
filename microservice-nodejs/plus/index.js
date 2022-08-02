const express = require('express');
const dotenv = require('dotenv').config();
const { LoggerMiddleware } = require('./middleware/LoggerMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(LoggerMiddleware);
app.use('/api', require('./routes/PlusRoute'))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Plus Server started on ${PORT}`);
})