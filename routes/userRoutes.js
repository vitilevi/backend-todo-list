const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/userController');
const googleAuth = require('../middlewares/googleAuth');

router
  .post('/login', rescue(googleAuth), controller.login)
  .post('/task', rescue(googleAuth), controller.newTask)
  .delete('/task', rescue(googleAuth), controller.deleteTask)
  .put('/task', rescue(googleAuth), controller.editTask);

module.exports = router;