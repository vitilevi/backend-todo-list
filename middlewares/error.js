const errorDictionary = {
  invalidUser: {
    status: 401,
    message: 'Usuário ou senha não encontrados',
  },
  badRequest: {
    status: 400,
    message: 'Sintaxe inválida',
  },
};

module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    const { status, message } = errorDictionary[err.statusCode];
    return res.status(status).json({
      error: { message },
    });
  }

  console.error(err);

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};
