const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

console.log("Successfully running");

// Use connect method to connect to the Server
(async function testConnection() {
    console.log("Trying to connect");
    await client.connect();
    console.log("Connected");
    await db.command({ ping: 1 });
    console.log("Pinged");
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

console.log("Success!");