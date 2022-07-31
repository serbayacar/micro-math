const plus = (req, res) => {
    let number1 = Number.parseFloat(req.query.number1);
    let number2 = Number.parseFloat(req.query.number2);
    res.status(200).json({ "result": number1 + number2 });
}

module.exports = {
    plus
}

