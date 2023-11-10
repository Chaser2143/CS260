class User{
  //In the future, a user will also hold budgets, which hold categories and expenses, thus connecting everything together
  constructor(Email, Password){
      this.Email = Email;
      this.Password = Password;
  }
}

//Used to store the login page info in local storage
function login() {
    console.log("In Login function");
    //Get each of the login fields
    const email = document.querySelector("#InputEmail");
    const password = document.querySelector("#InputPassword");
    const rememberMe = document.querySelector('#InputCheck').checked;

    const newUser = new User(email.value, password.value);

    // Serialize the object and store it in local storage
    localStorage.setItem("User", JSON.stringify(newUser));

    //Move to console.html
    window.location.href = "console.html";
  }