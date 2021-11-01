const model = require('../models/userModel');

async function login(payload) {
  const { email } = payload;
  let user = await model.getUser(email);
  if (!user.tasks) {
    user = await model.newUser(payload);
  }
  return user;
}

module.exports = {
  login,
};