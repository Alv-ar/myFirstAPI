const status = require("../status/status");

module.exports = {
    getTable: (req, res) => {
        try {
            
            const num = req.params.num;
            if(isNaN(num)){
                res.status(status.NOT_FOUND).send("Number not selected");
            } else {
                const arr = [];
                for(let i = 0; i < 10; i++){
                    let result = num * i;
                    let msg = `${num} x ${i} = ${result}`
                    arr.push(msg);
                }
                res.status(status.OK).send(arr);
            }
        } catch (e) {
            const errorMsg = e.toString()
            res.status(status.NOT_FOUND).send(errorMsg);
        }
    }
}