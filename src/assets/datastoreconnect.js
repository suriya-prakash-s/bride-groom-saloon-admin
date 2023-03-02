'use strict';
// sample-metadata:
//   title: List Tasks
//   description: Lists all tasks ordered by creation time.
//   usage: node tasks.list.js

// [START datastore_retrieve_entities]


const projectId = 'saloon-chatbot-bbbn';

const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId,
  });

async function listTasks() {
  const query = datastore.createQuery('appointment');
  const [tasks] = await datastore.runQuery(query);
  console.log('Tasks:');
  for (const task of tasks) {
    const taskKey = task[datastore.KEY];
    console.log(typeof taskKey.id,typeof task['CustomerName'],typeof task['PhoneNumber'],typeof task['Timings']);
  }
}
listTasks();