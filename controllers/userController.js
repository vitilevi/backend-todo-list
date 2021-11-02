const service = require('../services/userService');

async function login(req, res) {
  const user = await service.login(req.body.clientInfo);
  return res.status(200).json(user);
}

async function saveTasks(req, res) {
  const { clientInfo, tasks } = req.body;
  const updatedTasks = await service.saveTasks(clientInfo, tasks);
  return res.status(201).json(updatedTasks);
}

module.exports = {
  login,
  saveTasks,
};