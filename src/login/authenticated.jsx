import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout(); //Referenced in login.jsx, callback function for onAuthChange
        navigate('/'); //Navigate back to home
      });
  }

  return (
    <div>
      <Button type="button" className="btn btn-secondary btn-lg" onClick={() => logout()}>Logout</Button>
    </div>
  );
}
