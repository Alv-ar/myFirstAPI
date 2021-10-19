const users = [
    {name: 'john'},
    {name: 'david'}, 
    {name: 'maria'}
];

const status = {
    ok: 200
}

module.exports = {
    list: (req, res) => {
        //peticio a la BBDD per obtenir users
        res.status(status.ok).send(users)
    },
}