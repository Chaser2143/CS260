import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Console } from './console/console';
import { Budget } from './budget/budget';
import { Expense } from './expense/expense';
import { AuthState } from './login/authState';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
    <BrowserRouter>
        <div className='content'>
            <header>
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                {/* <Container> */}
                    <NavLink className="navbar-brand" to="home">Snatch Bank</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="login">Login</NavLink>
                        {authState === AuthState.Authenticated && (
                        <NavLink className="nav-link" to="console">Budget Console</NavLink>
                        )}
                    </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
                </Navbar>
            </header>
    
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route 
                    path='/login' 
                    element={
                        <Login 
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />
                        } 
                        exact
                    />
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
                    <img src="/github-mark-white.svg" alt="Github Social Logo" height="24px" width="24px" />
                </a>
            </footer>
        </div>
    </BrowserRouter>
    );
  }

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}