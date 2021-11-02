const service = require('../services/userService');

async function login(req, res) {
  const user = await service.login(req.body.clientInfo);
  return res.status(200).json(user);
}

async function newTask(req, res) {
  const { clientInfo: { email }, task } = req.body;
  const tasks = await service.newTask(email, task);
  return res.status(200).json(tasks);
}

async function deleteTask(req, res) {
  const { clientInfo: { email }, task } = req.body;
  console.log(task, email);
  await service.deleteTask(email, task);
  return res.status(203).end();
}

module.exports = {
  login,
  newTask,
  deleteTask,
};