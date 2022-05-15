const MongoClient = require('mongodb').MongoClient;
// import { MongoClient } from "mongodb";
// "cannot use import statement outside of a module"
const url = "mongodb://localhost:27017/socializer";

const seedUsers = require('./user-seeds')

const client = new MongoClient(process.env.MONGODB_URI || url);

const run = async () => {
  try {   
    await client.connect();

    const db = client.db("socializer");
    db.collection("users").drop(async (err, delOK) => {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
    });
    
    const users = db.collection('users');
    const result = await users.insertMany(seedUsers);
    console.log('--------------');
    console.log(`${result.insertedCount} documents were inserted into the users collection`);

  } finally {
    await client.close();
  }
};

run().catch(console.dir);
// haven't used the .catch syntax in awhile