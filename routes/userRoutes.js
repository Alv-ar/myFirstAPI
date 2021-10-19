const express = require(`express`);

const router = express.Router();

const userController = require('../controllers/userController');

router.get(`/list`, userController.list);
router.get(`/profile/:userId?`, userController.profile)
router.get(`/getDateMill`, userController.getDateMill);
router.get(`/getDateYMD`, userController.getDateYMD);
router.get(`/getDateHMS`, userController.getDateHMS)
router.get(`getTable/:num?`, userController.getTable)

module.exports = router;
