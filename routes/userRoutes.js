const router = require('express').Router();
const controller = require('../controllers/userController');
const googleAuth = require('../middlewares/googleAuth');

router
  .post('/login', googleAuth, controller.login);

module.exports = router;