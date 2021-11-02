const model = require('../models/userModel');

async function login(clientInfo) {
  const { email, picture, name } = clientInfo;
  let user = await model.getUser(email);
  if (!user || !user.tasks) {
    user = await model.newUser({ email, picture, name });
  }
  return user;
}

async function saveTasks(clientInfo, tasks) {
  return model.saveTasks(clientInfo.email, tasks);
}

module.exports = {
  login,
  saveTasks,
};