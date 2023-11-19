const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
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

function addExpense(newExpense, budgets){
  console.log(typeof newExpense.Budget);
  console.log(newExpense.Budget);
  for(budget of budgets){
    console.log(budget.Number);
    console.log(typeof budget.Number);
    if(budget.Number === newExpense.Budget){
      budget.Expenses.push(newExpense);
      break;
    }
  }
  return budgets;
}

module.exports = { getBudgets, updateBudgets, addExpense };