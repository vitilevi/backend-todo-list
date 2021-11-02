const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/userController');
const googleAuth = require('../middlewares/googleAuth');

router
  .post('/login', rescue(googleAuth), controller.login)
  .post('/saveTasks', rescue(googleAuth), controller.saveTasks)
  .get('/salve', (req, res) => res.status(200).json({ opa: 'salvinho' }));

module.exports = router;