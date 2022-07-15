// exports.numberFormatException = (err, req, res, next) => {

//     console.log('middleware katmani')

//     const statusCode = res.statusCode ? res.statusCode : 500;

//     res.status(statusCode)

//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? 'Girdiginiz degerler Number olmailidir' : err.stack
//     })

// }

const numberFormatException = (err, req, res, next) => {
    console.log('middleware');
}

module.exports = numberFormatException;