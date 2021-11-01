const service = require('../services/userService');

async function login(req, res) {
  const user = await service.login(req.body.clientInfo);
  return res.status(200).json({ opa: 'pong', user });
}

module.exports = {
  login,
};