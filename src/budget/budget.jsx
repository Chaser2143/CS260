import React from 'react';

export function Budget(){
    return (
        <main className="content pad-text">
            <div className="text-center">
                <h1>New Budget</h1>
                    <form>
                    <div className="form-group row justify-content-center">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-5">
                        <input type="text" className="form-control" id="name" placeholder="Budget Name"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="date" className="col-sm-2 col-form-label">Date Active</label>
                        <div className="col-sm-5">
                        <input type="date" className="form-control" id="date" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="amount" className="col-sm-2 col-form-label">Amount In</label>
                        <div className="col-sm-5">
                        <input type="number" className="form-control" id="amount" placeholder="$"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="notes" className="col-sm-2 col-form-label">Notes</label>
                        <div className="col-sm-5">
                        <input type="text" className="form-control" id="notes" placeholder="Notes"/>
                        </div>
                    </div>
                    
                    <br>
                    </br>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-5">
                        <button type="button" className="btn btn-primary" onclick="createBudget()">Submit</button>
                        </div>
                    </div>
                    </form>
            </div>
        </main>
    );
}