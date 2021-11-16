const express = require(`express`);
const app = express();
require('dotenv');
const cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}))


const myFirstController = require(`./controllers/myFirstController`);

app.post(`/`, myFirstController.helloWorld);

app.use(`/api/v1/user`, require(`./routes/userRoutes`));
app.use(`/api/v1/ex3`, require(`./routes/ex3routes`));
app.use(`/api/v1/S06-EX1`, require(`./routes/S06-EX1routes`));

app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port 3000!`);
})
