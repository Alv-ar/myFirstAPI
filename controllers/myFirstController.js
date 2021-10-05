module.exports.helloWorld = function (req, res) {
    alumnes = ["Aaren", "Aarika", "Abagael", "Abagail" , "Abbe" , "Abbey" , "Abbi" , "Abbie" , "Abby" , "Abbye" , "Abigael" , "Abigail" , "Abigale"]
    total = Object.keys(alumnes).length
    const responseObj = {'alumnes:':  alumnes, 'total:': total};
    
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}
