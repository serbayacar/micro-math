const divide = (req, res) => {
    let number1 = Number.parseFloat(req.body.number1);
    let number2 = Number.parseFloat(req.body.number2);
    res.status(200).json({ "divide": number1 / number2 });
}

module.exports = {
    divide
}