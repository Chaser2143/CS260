import React from 'react';
import ExpenseClass from './expenseClass';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Expense(){
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [budget, setBudget] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [notes, setNotes] = React.useState('');

    //Used to store an expense in local storage
    async function createExpense() {
      const newExpense = new ExpenseClass(name, date, Number(budget), category, amount, notes);

      //Add the new expense to the correct budget (backend api call)
      const response = await fetch('/api/expense', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newExpense),
      });

      // Store what the service gave us as Budget
      const budgets = await response.json();
      localStorage.setItem("Budget", JSON.stringify(budgets));


      //Move to console
      navigate('/console');
    }


    return (
        <main className="content pad-text">
      {/* <!-- This div is for the quick expense form -->
      <!-- This will use a WebSocket to pass data to the DB --> */}
      <div className="text-center">
        <h1>Quick Expense</h1>
        <form>
          <div className="form-group row justify-content-center">
            <label for="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-5">
              <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Expense Name"/>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label for="date" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-5">
              <input 
                type="date" 
                className="form-control" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="NA"/>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label for="budget" className="col-sm-2 col-form-label">Budget</label>
            <div className="col-sm-5">
              <input 
                type="number" 
                className="form-control" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Budget #"/>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label for="category" className="col-sm-2 col-form-label">Category</label>
            <div className="col-sm-5">
              <input 
                  type="text" 
                  className="form-control" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category"/>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label for="amount" className="col-sm-2 col-form-label">Amount</label>
            <div className="col-sm-5">
              <input 
                type="number" 
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="$"/>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label for="notes" className="col-sm-2 col-form-label">Notes</label>
            <div className="col-sm-5">
              <input 
                type="text" 
                className="form-control" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)} 
                placeholder="Notes"/>
            </div>
          </div>
          
          <br>
          </br>

          <div className="form-group row justify-content-center">
            <div className="col-sm-5">
            <Button type="button" className="btn btn-primary" onClick={() => createExpense()}>Submit</Button>
            </div>
          </div>
        </form>
        </div>
    </main>
    );
}