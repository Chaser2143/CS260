//Used as the base for connecting all my js files
const express = require('express');
const app = express();
const DB = require('./database.js');

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
apiRouter.get('/budgets', async (_req, res) => {
    const budgets = await DB.getBudgets();
    res.send(budgets);
  });

// Add a new budget
apiRouter.post('/budget', async (req, res) => {
    budgets = await DB.updateBudgets(req.body);
    res.send(budgets);
  });

//Adds an expense to a given budget
apiRouter.post('/expense', async (req, res) => {
  budgets = await DB.addExpense(req.body);
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