const express = require(`express`);
const router = express.Router();

const controller = require('../controllers/ex3controller')
const middleware = require('../middlewares/ex3middleware');

router.get('/fact', 
    middleware.checkNumQueryParam,
    middleware.checkNumQueryInteger,
    controller.factorial
);

module.exports = router;
