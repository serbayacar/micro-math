const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/PlusRoute'))



app.listen(PORT, () => {
    console.log(`Plus Server started on ${PORT}`);
})