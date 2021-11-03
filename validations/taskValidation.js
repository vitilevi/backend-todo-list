function task(receivedTask) {
  const error = new Error();
  error.statusCode = 'badRequest';

  if (!receivedTask) throw error;
}

module.exports = {
  task,
};