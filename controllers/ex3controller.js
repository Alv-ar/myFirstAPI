const status = require("../status/status")

module.exports.factorial = (req, res) => {
    if(req.query.num){
        let result = 1;
        for(let i = num; i > 1; i--) {
            result *= i;
        }
        res.status(status.OK).send({result})
    }else{
        res.status(status.bad_request).send({message: '"num" param missing'})
    }
}