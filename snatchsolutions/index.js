//Used as the base for connecting all my js files
const express = require('express');
const app = express();

const port = 4000; //Set the port to 4000 always

// JSON body parsing using built-in middleware
app.use(express.json());

//Public and Src folders hold my middleware
app.use(express.static('public'));
app.use(express.static('src'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get Budgets
apiRouter.get('/budgets', (_req, res) => {
    res.send(budgets);
  });

// Add a new budget
apiRouter.post('/budget', (req, res) => {
    budgets = updateBudgets(req.body, budgets);
    res.send(budgets);
  });

//Adds an expense to a given budget
apiRouter.post('/expense', (req, res) => {
  budgets = addExpense(req.body, budgets);
  res.send(budgets);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });


//Run server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

var budgets = [];

//Adds a budget to the total budgets
function updateBudgets(newBudget, budgets){
    budgets.push(newBudget);
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