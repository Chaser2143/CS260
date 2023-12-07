import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Console() {
  const [budgets, setBudgets] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch('/api/budgets')
      .then((response) => response.json())
      .then((b) => {
        setBudgets(b);
        localStorage.setItem('Budget', JSON.stringify(b));
      })
      .catch(() => {
        // If there was an error then just use the last saved budgets
        const budgetsText = localStorage.getItem('Budget');
        if (budgetsText) {
          setBudgets(JSON.parse(budgetsText));
        }
      });
  }, []);

  const budgetRows = [];
  if (budgets.length) {
    for (const [i, budget] of budgets.entries()) {
      budgetRows.push(
        <tr key={i}>
          <td>{budget.Number}</td>
          <td>{budget.Name}</td>
          <td>{budget.Date}</td>
          <td>{budget.Amount}</td>
          <td>{budget.Notes}</td>
        </tr>
      );
    }
  }

  return (
    <main className="content mar-content">
      {/* <!-- This div is for the "Create a budget" form --> */}
      <div>
        <h1>Current Budgets</h1>
        <div className="table-responsive">
        <table className="table table-hover table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date Active</th>
              <th scope="col">Amount In</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody id="budgets">{budgetRows}</tbody>
        </table>
        </div>
        <div> 
          <Button className="btn btn-light" onClick={() => navigate("/console/budget")}>Create Budget</Button>
          <Button className="btn btn-light" onClick={() => navigate("/console/expense")}>Add Expense</Button>
        </div>
      </div>
    </main>
  );
}