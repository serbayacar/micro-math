const plus = (req, res) => {
    try {
        let number1 = Number.parseFloat(req.query.number1);
        let number2 = Number.parseFloat(req.query.number2);
        res.status(200).json({ "result": number1 + number2 });
    }catch(error) {
        next(error)
    }
}

module.exports = {
    plus
}

