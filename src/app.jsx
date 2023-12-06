import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <a className="navbar-brand" href="index.html">Snatch Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="login.html">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="console.html">Budget Console</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
  
        <main className='content'>App components go here</main>
  
        <footer className="d-flex bg-dark p-3 justify-content-between">
            <span className="footer-content">Author: Chase Bledsoe</span>
            <span className="footer-content" id="loginWebsocket"></span>
            <a className ="footer-content" href="https://github.com/Chaser2143/SnatchSolutions">
                <img src="public/github-mark-white.svg" alt="Github Social Logo" height="24px" width="24px" />
            </a>
        </footer>
    </div>
    );
  }