// const { ObjectId } = require('mongodb');
const connection = require('../connection');

const { USER_DB } = process.env;

function getUser(email) {
  return connection()
    .then((db) => db.collection(USER_DB).findOne({ email }))
    .catch(() => null);
}

function newUser(payload) {
  return connection()
    .then((db) => db.collection(USER_DB).insertOne({
      ...payload,
      tasks: [],
    }))
    .catch(() => null);
}

module.exports = {
  getUser,
  newUser,
};