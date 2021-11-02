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
    .then((res) => res.ops[0])
    .catch(() => null);
}

function newTask(email, task) {
  return connection()
    .then((db) => db.collection(USER_DB).updateOne({ email }, { $push: { tasks: task } }))
    .catch(() => null);
}

function deleteTask(email, task) {
  return connection()
    .then((db) => db.collection(USER_DB).updateOne({ email }, { $pull: { tasks: task } }))
    .catch(() => null);
}

module.exports = {
  getUser,
  newUser,
  newTask,
  deleteTask,
};