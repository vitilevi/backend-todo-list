// const { ObjectId } = require('mongodb');
const connection = require('../connection');

const { TASK_DB } = process.env;

function setupNewUser(email) {
  return connection()
    .then((db) => db.collection(TASK_DB).insertOne({ email, tasks: [] }));
}

function getTasks(email) {
  return connection()
    .then((db) => db.collection(TASK_DB).findOne({ email }))
    .catch(() => null);
}

function addNewTask(email, task) {
  return connection()
    .then((db) => db.collection(TASK_DB).updateOne({ email }, { $push: { tasks: task } }));
}

function removeTask(email, task) {
  return connection()
    .then((db) => db.collection(TASK_DB).updateOne({ email }, { $pull: { tasks: { $eq: task } } }));
}

module.exports = {
  setupNewUser,
  getTasks,
  addNewTask,
  removeTask,
};