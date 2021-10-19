const express = require(`express`);
const app = express();
require('dotenv');

const myFirstController = require(`./controllers/myFirstController`);

app.post(`/`, myFirstController.helloWorld);

app.use(`/api/v1/user`, require(`./routes/userRoutes`));

app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port 3000!`);
})
