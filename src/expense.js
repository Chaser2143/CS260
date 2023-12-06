class Expense {
  constructor(Name, Date, Budget, Category, Amount, Notes) {
    this.Name = Name;
    this.Date = Date;
    this.Budget = Budget;
    this.Category = Category;
    this.Amount = Amount;
    this.Notes = Notes;
  }
}

//Used to store an expense in local storage
async function createExpense() {
    //Get each of the expense fields
    const Name = document.querySelector("#name");
    const Date = document.querySelector("#date");
    const Budget = document.querySelector('#budget');
    const Category = document.querySelector("#category");
    const Amount = document.querySelector("#amount");
    const Notes = document.querySelector("#notes");

    const newExpense = new Expense(Name.value, Date.value, Number(Budget.value), Category.value, Amount.value, Notes.value);

    //Add the new expense to the correct budget (backend api call)
    const response = await fetch('/api/expense', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newExpense),
    });
  
    // Store what the service gave us as Budget
    const budgets = await response.json();
    localStorage.setItem("Budget", JSON.stringify(budgets));
  

    //Move to console html
    window.location.href = "console.html";
  }