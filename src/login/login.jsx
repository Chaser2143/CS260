import React from 'react';

export function Login() {
  return (
    <main className="content align-form">
      <div>
        <div className="blockquote text-center">
          <h1 className="display-2 m-1" id="welcome_greeting">Welcome</h1>
          <small className="text-muted" id="welcome_language"> </small>
        </div>
        <div id="loginControls" style="display: none">
        <form className="mar-form p-2">
          <div className="form-group">
            <label for="InputEmail">Email address</label>
            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          {/* <br>
          </br> */}
          <div className="form-group">
            <label for="InputPassword">Password</label>
            <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
          </div>
          {/* <br> */}
          <button className="btn btn-primary" type="button" onclick="loginUser()">Sign In</button>
          <button className="btn btn-primary" type="button" onclick="createUser()">Create Account</button>
          {/* </br> */}
        </form>
      </div>

      <div id="logoutControls" style="display: none">
        <button type="button" className="btn btn-secondary btn-lg" onclick="logout()">Logout</button>
      </div>
      </div>

    <div className="modal fade" id="msgModal" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-dark">
          <div className="modal-body">error message here</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}