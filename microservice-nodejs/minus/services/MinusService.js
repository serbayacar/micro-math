

const minus = (req, res, next) => {
    try {
        let number1 = Number.parseFloat(req.body.number1);
        let number2 = Number.parseFloat(req.body.number2)
        res.status(200).json({ "minus": number1 - number2 });
    }catch(error) {
        next(error)
    }

}

module.exports = {
    minus
}
