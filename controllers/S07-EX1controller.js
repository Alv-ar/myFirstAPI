const movils = [
    {modelo:1, precio: 200, pulgadas: 24, ram: '54gb', cpu: '11gb'},
    {modelo:2, precio: 300,  pulgadas: 33, ram: '15gb', cpu: '22gb'}, 
    {modelo:3, precio: 400,  pulgadas: 57, ram: '55gb', cpu: '12gb'}
];

const status = require("../status/status")

module.exports = {
    add: (req, res) => {
        const movil = req.body;

        movils.push(movil)

        res.status(status.created).send(movils)
    },

    list: (req, res) => {
        console.log(req.query)

        res.status(status.OK).send(movils)
    },

    update: (req, res) => {
        const movil = movils.find((movil) => movil.modelo == req.params.modelo);
        if(movil) {
            res.status(status.OK).send(movil)
        } else {
            const msg = {error: "Movil model not found"};
            res.status(status.NOT_FOUND).send(msg)
        }
    }
}