const status = require("../status/status");



module.exports = {
    getFactorial: (req, res) => {
        const num = req.params.num;
        function factorialize(num) {
            if (num < 0) 
                return -1;
            else if (num == 0) 
                return 1;
            else {
                return (num * factorialize(num - 1));
            }
          }
        factorialize(num)
    }
}