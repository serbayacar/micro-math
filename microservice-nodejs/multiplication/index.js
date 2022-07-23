const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/MultiplicationRoute'))


app.listen(PORT, () => {
    console.log(`Multiplication Server started on ${PORT}`);
})