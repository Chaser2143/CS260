
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
    constructor(Number, Name, DateActive, DateEnded, AmountIn, Categories, Expenses) {
      this.Number = Number;
      this.Name = Name;
      this.DateActive = DateActive;
      this.DateEnded = DateEnded;
      this.AmountIn = AmountIn;
      this.Categories = Categories;
      this.Expenses = Expenses;
    }

    //Function to add/remove a category

    //Function to add/remove expenses
  }