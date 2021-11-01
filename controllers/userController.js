function login(req, res) {
  return res.status(200).json({ opa: 'pong' });
}

module.exports = {
  login,
};