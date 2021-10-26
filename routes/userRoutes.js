const express = require(`express`);
const dateController = require('../controllers/dateController');
const tableController = require('../controllers/tableController');

const router = express.Router();

const userController = require('../controllers/userController');

router.get(`/list`, userController.list);
router.get(`/profile/:userId?`, userController.profile)
router.get(`/getDateMill`, dateController.getDateMill);
router.get(`/getDateYMD`, dateController.getDateYMD);
router.get(`/getDateHMS`, dateController.getDateHMS);
router.get(`getTable/:num?`, tableController.getTable);

module.exports = router;
