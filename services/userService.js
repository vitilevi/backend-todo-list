const model = require('../models/userModel');

async function login(clientInfo) {
  const { email, picture, name } = clientInfo;
  let user = await model.getUser(email);
  if (!user || !user.email) {
    user = await model.newUser({ email, picture, name });
  }
  return user;
}

async function newTask(email, task) {
  return model.newTask(email, task);
}

async function deleteTask(email, task) {
  return model.deleteTask(email, task);
}

async function editTask(email, tasks) {
  return model.editTask(email, tasks);
}

module.exports = {
  login,
  newTask,
  deleteTask,
  editTask,
};