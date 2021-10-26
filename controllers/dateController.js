const date = new Date();

const status = require("../status/status");

module.exports = {
    getDateMill: (req, res) => {
        res.status(status.OK).send(date.getTime().toString())
    },

    getDateYMD: (req, res) => {
        res.status(status.OK).send(date.toISOString().slice(0, 10))
    },

    getDateHMS: (req, res) => {
        res.status(status.OK).send(date.toTimeString().split(' ')[0])
    }
}