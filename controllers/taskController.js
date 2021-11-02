const service = require('../services/taskService');

async function getTasks(req, res) {
  // const { email } = req.params;
  const { clientInfo: { email } } = req.body;
  console.log(email);
  const tasks = await service.getTasks(email);
  return res.status(200).json(tasks);
}

module.exports = {
  getTasks,
};