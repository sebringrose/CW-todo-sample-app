import { MongoClient } from 'mongodb';
import conf from '../config.js';

const client = new MongoClient(conf.dbUrl);

async function run() {
  try {
    await client.connect();
    console.log('Successfully connected to database.');
  } catch(e) {
    console.log(e);
  }
};

run();

export default client;
