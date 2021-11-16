const users = [
    {id:1, name: 'john'},
    {id:2, name: 'david'}, 
    {id:3, name: 'maria'}
];

const router = require("../routes/userRoutes");
const status = require("../status/status")

module.exports = {
    list: (req, res) => {
        console.log(req.query.orden) //req.query son los parametros uqe envio por la url
        //console.log(req.body)
        //peticio a la BBDD per obtenir users
        res.status(status.OK).send(users)
    },

    profile: (req, res) => {
        //peticion a la bbdd per obtenir les dades de un user
        //console.log(req.params.userId);
        const user = users.find((user) => user.id == req.params.userId);
        if(user) {
            res.status(status.OK).send(user)
        } else {
            const msg = {error: "User id not found"};
            res.status(status.NOT_FOUND).send(msg)
        }
    },

    create: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user)
        
        res.status(status.created).send(user)
    }
}