import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Console } from './console/console';
import { Budget } from './budget/budget';
import { Expense } from './expense/expense';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Button from 'react-bootstrap/Button';

export default function App() {
    return (
    <BrowserRouter>
        <div className='expand content'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <NavLink className="navbar-brand" to='home'>Snatch Bank</NavLink>
                    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                        <NavLink className="nav-link" to="login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="console">Budget Console</NavLink>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
    
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/console' element={<Console />} />
                <Route path='console/budget' element={<Budget />} />
                <Route path='console/expense' element={<Expense />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
    
            <footer className="d-flex bg-dark p-3 justify-content-between">
                <span className="footer-content">Author: Chase Bledsoe</span>
                <span className="footer-content" id="loginWebsocket"></span>
                <a className ="footer-content" href="https://github.com/Chaser2143/SnatchSolutions">
                    <img src="public/github-mark-white.svg" alt="Github Social Logo" height="24px" width="24px" />
                </a>
            </footer>
        </div>
    </BrowserRouter>
    );
  }

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}