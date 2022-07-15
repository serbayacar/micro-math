const plus = (req, res) => {
    console.log(req.body);
    let number1 = Number.parseFloat(req.body.number1);
    let number2 = Number.parseFloat(req.body.number2);
    res.status(200).json({ "plus": number1 + number2 });
}

module.exports = {
    plus
}

