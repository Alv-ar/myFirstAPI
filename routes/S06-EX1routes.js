const express = require(`express`);
const router = express.Router();

const controller = require('../controllers/S06-EX1controller')
const middleware = require('../middlewares/randomMiddleware');

router.get('/rand', 
    middleware.higherThanOne,
    controller.random
);

module.exports = router;
