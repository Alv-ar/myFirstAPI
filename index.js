const express = require(`express`);
const app = express();
require('dotenv');

const myFirstController = require(`./controllers/myFirstController`);
app.get(`/`, myFirstController.helloWorld);
app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port 3000!`);
})
