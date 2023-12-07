import React from 'react';
import BudgetClass from './budgetClass';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Budget(){
    const navigate = useNavigate();

    const [budgetCounter, setBudgetCounter] = React.useState(1);
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [notes, setNotes] = React.useState('');

    //Creates a new budget to be filled in by the form
    async function createBudget(){
        const newBudget = new BudgetClass(budgetCounter, name, date, amount, notes);
        setBudgetCounter(budgetCounter+1); //Increment Budget Counter
    
        console.log(newBudget);
        
    
        const response = await fetch('/api/budget', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newBudget),
        });
    
        // Store what the service gave us as the high scores
        const budgets = await response.json();
        localStorage.setItem("Budget", JSON.stringify(budgets));
    
        //Move to console
        navigate('/console');
    }


    return (
        <main className="content pad-text">
            <div className="text-center">
                <h1>New Budget</h1>
                    <form>
                    <div className="form-group row justify-content-center">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Budget Name"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="date" className="col-sm-2 col-form-label">Date Active</label>
                        <div className="col-sm-5">
                        <input 
                            type="date" 
                            className="form-control" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="amount" className="col-sm-2 col-form-label">Amount In</label>
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
                        <Button type="button" className="btn btn-primary" onClick={() => createBudget()}>Submit</Button>
                        </div>
                    </div>
                    </form>
            </div>
        </main>
    );
}