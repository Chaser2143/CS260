const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const budgetCollection = db.collection('budget');

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

function getBudgets(){
    //Return an array of all budgets here
    const budgets = budgetCollection.find();
    return budgets.toArray();
}

//Adds a budget to the total budgets
async function updateBudgets(newBudget){
    const budgets = await budgetCollection.insertOne(newBudget);
    return budgets;
}

async function addExpense(newExpense){
    // Find a document with a specific condition
    const query = { Number : newExpense.Budget };
    const update = { $push: { Expenses: newExpense } };

    // Update the found document
    const result = await budgetCollection.findOneAndUpdate(query, update, { returnOriginal: false });
    const budgets = budgetCollection.find();
    return budgets.toArray();
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

module.exports = { 
  getBudgets, 
  updateBudgets, 
  addExpense,
  getUser,
  getUserByToken,
  createUser,};