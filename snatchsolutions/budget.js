//Categories should be paired with budgets, but also should be accessible as a set so users don't have to remake their categories with every new budget
class Category{
    constructor(Name, AmountSet){
        this.Name = Name;
        this.AmountSet = AmountSet;
    }
}

//Holds Expenses
//On load will dynamically update amounts from the expenses and their categories
class Budget {
    constructor(Number){
      this.Number = Number;
    }

    //Function to add/remove a category

    //Function to add/remove expenses
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
function createBudget(){
  let budgetNum = getNewBudgetNum();
  const newBudget = new Budget(budgetNum);
  
  //Store budget in local memory so I can edit it before saving it to the DB
  localStorage.setItem("NewBudget", JSON.stringify(newBudget));

  //Move to budgetCreate html
  window.location.href = "budgetCreate.html";
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