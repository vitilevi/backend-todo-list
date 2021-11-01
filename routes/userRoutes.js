const router = require('express').Router();
const controller = require('../controllers/userController');

router
  .get('/login', controller.login);

module.exports = router;