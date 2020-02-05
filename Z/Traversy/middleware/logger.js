const moment = require('./node_modules/moment')

const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    // //memberi informasi pada terminal mengenai lokasi host dan port, serta data waktu
    next() // //perintah pada middleware
}

module.exports = logger