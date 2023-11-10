//Holds Expenses
//On load will dynamically update amounts from the expenses and their categories
class Budget {
  constructor(Number, Name, Date, Amount, Notes){
    this.Number = Number;
    this.Name = Name;
    this.Date = Date;
    this.Amount = Amount;
    this.Notes = Notes;
    this.Expenses = [];
  }

  addExpense(Expense){
    this.Expenses.push(Expense);
  }
}

// Initialize the budgetCounter from localStorage or start at 1 if it doesn't exist
let budgetCounter = parseInt(localStorage.getItem('budgetCounter')) || 1;

// Function to get a new unique budget number
function getNewBudgetNum() {
  budgetCounter++;
  // Store the updated counter in localStorage
  localStorage.setItem('budgetCounter', budgetCounter);
  return budgetCounter;
}

//Creates a new budget to be filled in by the form
async function createBudget(){
  const Name = document.querySelector("#name");
  const Date = document.querySelector("#date");
  const Amount = document.querySelector("#amount");
  const Notes = document.querySelector("#notes");
  const budgetNum = getNewBudgetNum();
  const newBudget = new Budget(budgetNum, Name.value, Date.value, Amount.value, Notes.value);

  console.log(newBudget);
  
  // //Store budget in local memory so I can edit it before saving it to the DB ---- OLD WAY
  // localStorage.setItem("Budget", JSON.stringify(newBudget));

  const response = await fetch('/api/budget', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newBudget),
  });

  // Store what the service gave us as the high scores
  const budgets = await response.json();
  localStorage.setItem("Budget", JSON.stringify(budgets));

  //Move to budgetCreate html
  window.location.href = "console.html";
}

//Get the budget Number and populate it into the form
function populateCreateBudget(){
  console.log("IN POP");
  const numHTML = document.querySelector("#BudgetNum");
  numHTML.innerHTML = localStorage.getItem('budgetCounter');
}

function injectCategory() {
  const injectionContainer = document.getElementById('injectCategory');
  // HTML content you want to inject
  const htmlToInject = '<th scope="row" ondblclick="editText(this)">--Double Click to Edit--</th><td ondblclick="editText(this)"></td><td></td>';

  // Inject the HTML content into the container
  injectionContainer.innerHTML = htmlToInject;
}

// function injectExpense() {
//   const injectionContainer = document.getElementById('injectCategory');
//   // HTML content you want to inject
//   const htmlToInject = '<th scope="row" ondblclick="editText(this)">--Double Click to Edit--</th><td ondblclick="editText(this)"></td><td></td>';

//   // Inject the HTML content into the container
//   injectionContainer.innerHTML = htmlToInject;
// }

function injectExpense() {
  const injectionContainer = document.getElementById('injectCategory');
  // Create a new table row element
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th scope="row" ondblclick="editText(this)">--Double Click to Edit--</th>
    <td ondblclick="editText(this)"></td>
    <td></td>
  `;

  // Append the new row to the table
  injectionContainer.appendChild(newRow);
}