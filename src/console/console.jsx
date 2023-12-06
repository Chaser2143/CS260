import React from 'react';
import { Link } from 'react-router-dom';

export function Console() {
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
          <tbody id="budgets"></tbody>
        </table>
        </div>
        <div> 
          {/* Both of these buttons need wired up */}
          <Link to="budget"> 
            <button className="btn btn-light" type="submit">Create Budget</button>
          </Link>
          <Link to="expense">
            <button className="btn btn-light" type="submit">Add Expense</button>
          </Link>
        </div>
      </div>
    </main>
  );
}