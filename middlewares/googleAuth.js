const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);

async function googleAuth(req, _res, next) {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    req.body.clientInfo = payload;
  
    next();
  } catch (e) {
    throw new Error('userNotRegistered');
  }
}

module.exports = googleAuth;