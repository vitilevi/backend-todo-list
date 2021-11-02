const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/taskController');
const googleAuth = require('../middlewares/googleAuth');

router
  .post('/tasks', rescue(googleAuth), controller.getTasks);

module.exports = router;