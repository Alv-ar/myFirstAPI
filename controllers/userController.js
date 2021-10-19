const users = [
    {id:1, name: 'john'},
    {id:2, name: 'david'}, 
    {id:3, name: 'maria'}
];

const status = {
    ok: 200,
    notFound : 404,
}
const date = new Date();


module.exports = {
    list: (req, res) => {
        console.log(req.query.orden) //req.query son los parametros uqe envio por la url
        //console.log(req.body)
        //peticio a la BBDD per obtenir users
        res.status(status.ok).send(users)
    },

    profile: (req, res) => {
        //peticion a la bbdd per obtenir les dades de un user
        //console.log(req.params.userId);
        const user = users.find((user) => user.id == req.params.userId);
        if(user) {
            res.status(status.ok).send(user)
        } else {
            const msg = {error: "User id not found"};
            res.status(status.notFound).send(msg)
        }
    },

    getDateMill: (req, res) => {
        res.status(status.ok).send(date.getTime().toString())
    },

    getDateYMD: (req, res) => {
        res.status(status.ok).send(date.toISOString().slice(0, 10))
    },

    getDateHMS: (req, res) => {
        res.status(status.ok).send(date.toTimeString().split(' ')[0])
    },

    getTable: (req, res) => {
        const num = req.params.num;
        for(let i = 0; i < 10; i++){
            //TODO tabla multiplicar
        }
    }
}