//Used to store the login page info in local storage
function login() {
    //Get each of the login fields
    const email = document.querySelector("#InputEmail");
    const password = document.querySelector("#InputPassword");
    const rememberMe = document.querySelector('#InputCheck').checked;

    //Set them each in local storage
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("rememberMe", rememberMe);

    //Move to console.html
    window.location.href = "console.html";
  }