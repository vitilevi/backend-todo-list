const model = require('../models/taskModel');

async function getTasks(email) {
  return model.getTasks(email);
}

async function addNewTask(email, task) {
  return model.addNewTask(email, task);
}

async function removeTask(email, task) {
  return model.removeTask(email, task);
}

module.exports = {
  getTasks,
  addNewTask,
  removeTask,
};