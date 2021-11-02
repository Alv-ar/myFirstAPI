const status = require("../status/status");

module.exports.random = (req, res) => {
    const num = Number(req.query.num)
    const rndInt = Math.floor(Math.random() * num) + 1
    res.status(status.OK).send({rndInt})

}