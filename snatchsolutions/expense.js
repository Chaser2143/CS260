class Expense {
    constructor(Name, Date, Budget, Category, Amount, Notes) {
      this.Name = Name;
      this.Date = Date;
      this.Budget = Budget;
      this.Category - Category;
      this.Amount = Amount;
      this.Notes = Notes;
    }
  }
  



//Used to store an expense in local storage
function createExpense() {
    //Get each of the expense fields
    const Name = document.querySelector("#name");
    const Date = document.querySelector("#date");
    const Budget = document.querySelector('#budget');
    const Category = document.querySelector("#category");
    const Amount = document.querySelector("#amount");
    const Notes = document.querySelector("#notes");

    const newExpense = new Expense(Name.value, Date.value, Budget.value, Category.value, Amount.value, Notes.value);

    // Serialize the object and store it in local storage
    localStorage.setItem("Expense", JSON.stringify(newExpense));

    //Move to console html
    window.location.href = "console.html";
  }