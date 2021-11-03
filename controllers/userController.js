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
  await service.deleteTask(email, task);
  return res.status(203).end();
}

async function editTask(req, res) {
  const { clientInfo: { email }, tasks } = req.body;
  console.log(tasks, email);
  const editedTask = await service.editTask(email, tasks);
  return res.status(200).json(editedTask);
}

module.exports = {
  login,
  newTask,
  deleteTask,
  editTask,
};