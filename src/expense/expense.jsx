import React from 'react';

export function Expense(){
    return (
        <main class="content pad-text">
      {/* <!-- This div is for the quick expense form -->
      <!-- This will use a WebSocket to pass data to the DB --> */}
      <div class="text-center">
        <h1>Quick Expense</h1>
        <form>
          <div class="form-group row justify-content-center">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="name" placeholder="Expense Name"/>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <label for="date" class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-5">
              <input type="date" class="form-control" id="date" placeholder="Password"/>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <label for="budget" class="col-sm-2 col-form-label">Budget</label>
            <div class="col-sm-5">
              <input type="number" class="form-control" id="budget" placeholder="Budget #"/>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <label for="category" class="col-sm-2 col-form-label">Category</label>
            <div class="col-sm-5">
            <select class="form-control custom-select" id="category">
              <option selected>Choose...</option>
              <option value="1">C1</option>
              <option value="2">C2</option>
              <option value="3">C3</option>
            </select>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <label for="amount" class="col-sm-2 col-form-label">Amount</label>
            <div class="col-sm-5">
              <input type="number" class="form-control" id="amount" placeholder="$"/>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <label for="notes" class="col-sm-2 col-form-label">Notes</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="notes" placeholder="Notes"/>
            </div>
          </div>
          
          <br>
          </br>

          <div class="form-group row justify-content-center">
            <div class="col-sm-5">
              <button type="button" class="btn btn-primary" onclick="createExpense()">Submit</button>
            </div>
          </div>
        </form>
        </div>
    </main>
    );
}