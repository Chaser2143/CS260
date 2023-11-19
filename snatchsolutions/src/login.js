// class User{
//   //In the future, a user will also hold budgets, which hold categories and expenses, thus connecting everything together
//   constructor(Email, Password){
//       this.Email = Email;
//       this.Password = Password;
//   }
// }

// //Used to store the login page info in local storage
// function login() {
//     console.log("In Login function");
//     //Get each of the login fields
//     const email = document.querySelector("#InputEmail");
//     const password = document.querySelector("#InputPassword");
//     const rememberMe = document.querySelector('#InputCheck').checked;

//     const newUser = new User(email.value, password.value);

//     // Serialize the object and store it in local storage
//     localStorage.setItem("User", JSON.stringify(newUser));

//     //Move to console.html
//     window.location.href = "console.html";
//   }


//NEW CODE
(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    setDisplay('loginControls', 'none');
    setDisplay('logoutControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
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
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}
