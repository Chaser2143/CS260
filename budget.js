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

async function loadBudgets(){
  let budgets = [];
  try {
    // Get the latest budgets from the service
    const response = await fetch('/api/budgets');
    budgets = await response.json();

    // Save the budgets in case we go offline in the future
    localStorage.setItem('Budget', JSON.stringify(budgets));
  } catch {
    // If there was an error then just use the last saved budgets
    const budgetsText = localStorage.getItem('Budget');
    if (budgetsText) {
      budgets = JSON.parse(budgetsText);
    }
  }

  displayScores(budgets);
}

function displayScores(budgets) {
  const tableBodyEl = document.querySelector('#budgets');

  if (budgets.length) {
    // Update the DOM with the scores
    for (const [i, budget] of budgets.entries()) {
      const numberTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');
      const amountTdEl = document.createElement('td');
      const notesTdEl = document.createElement('td');

      numberTdEl.textContent = budget.Number;
      nameTdEl.textContent = budget.Name;
      dateTdEl.textContent = budget.Date;
      amountTdEl.textContent = budget.Amount;
      notesTdEl.textContent = budget.Notes;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(numberTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(dateTdEl);
      rowEl.appendChild(amountTdEl);
      rowEl.appendChild(notesTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    // tableBodyEl.innerHTML = '<tr><td colSpan=4>Error</td></tr>';
  }
}

loadBudgets();