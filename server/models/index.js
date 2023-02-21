import { MongoClient, ServerApiVersion } from 'mongodb';
import conf from '../config.js';

// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const client = new MongoClient(conf.dbUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  serverApi: ServerApiVersion.v1 
});

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
