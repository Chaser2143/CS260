(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    setDisplay('loginControls', 'none');
    setDisplay('logoutControls', 'inline-block');
  } else {
    setDisplay('loginControls', 'inline-block');
    setDisplay('logoutControls', 'none');
  }
})();

async function loginUser() {
  console.log("Trying to log in");
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  console.log("Trying to create account");
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const email = document.querySelector("#InputEmail").value;
  const password = document.querySelector("#InputPassword").value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', email);
    window.location.href = 'console.html';
    sendMessage(email); //WEBSOCKET CALLED HERE
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  console.log("Trying to set login display");
  const controls = document.querySelector(`#${controlId}`);
  if (controls) {
    console.log("Setting display: " + controlId + " " + display);
    controls.style.display = display;
  }
}
