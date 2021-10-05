const express = require(`express`);
const app = express();

const myFirstController = require(`./controllers/myFirstController`);
app.get(`/`, myFirstController.helloWorld);
app.listen(3000, function () {
    console.log(`Example app listening on port 3000!`);
})