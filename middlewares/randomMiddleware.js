const status = require("../status/status")

module.exports.higherThanOne = (req, res, next) => {
    if(req.query.num > 1 || req.query.num == 1) {
        next()
    } else {
        res.status(status.bad_request).send({message: '"num" lower than 1'})
    }
}