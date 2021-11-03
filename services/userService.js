const model = require('../models/userModel');
const validate = require('../validations/taskValidation');

async function login(clientInfo) {
  const { email, picture, name } = clientInfo;
  let user = await model.getUser(email);
  if (!user || !user.email) {
    user = await model.newUser({ email, picture, name });
  }
  return user;
}

async function newTask(email, task) {
  const insertedTask = await model.newTask(email, task);
  validate.task(insertedTask);
  return insertedTask;
}

async function deleteTask(email, task) {
  const deletedTask = await model.deleteTask(email, task);
  validate.task(deletedTask);
  return deletedTask;
}

async function editTask(email, tasks) {
  const editedTask = await model.editTask(email, tasks);
  validate.task(editedTask);
  return editTask;
}

module.exports = {
  login,
  newTask,
  deleteTask,
  editTask,
};