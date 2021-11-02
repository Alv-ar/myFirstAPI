const status = require("../status/status")

module.exports.checkNumQueryParam = (req, res, next) => {
    if(req.query.num){
        next();
    }else{
        res.status(status.bad_request).send({message: '"num" param missing'})
    }
}

module.exports.checkNumQueryInteger = (req, res, next) => {
    req.query.num = Number(req.query.num)
    if(!Number.isNaN(req.query.num)){
        if(Number.isInteger(req.query.num)){
        next();
        }else{
            res.status(status.bad_request).send({message: '"num" param must be integer'});
        }
    }else{
        res.status(status.bad_request).send({message: '"num" param must be numeric'});
    }
    
}