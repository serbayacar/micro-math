const multiplication = (req, res) => {
    let number1 = Number.parseFloat(req.body.number1);
    let number2 = Number.parseFloat(req.body.number2);
    res.status(200).json({ "multiplication": number1 * number2 });
}

module.exports = {
    multiplication
}