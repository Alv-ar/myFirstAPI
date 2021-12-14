const express = require(`express`);
const router = express.Router();

const controller = require('../controllers/S07-EX1controller')

router.post('/add', controller.add)
router.get('/list', controller.list)
router.put('/update/:model', controller.update)

module.exports = router;
