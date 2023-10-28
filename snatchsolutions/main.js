//Welcome API Stuff
const greetingsApiUrl = "https://www.greetingsapi.com/random";

async function callGreetingsAPI() {
    try {
        const response = await fetch(greetingsApiUrl);
        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            throw new Error('Failed to fetch data from the API');
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return "An error occurred"; // Return a default message or handle the error as needed
    }
}

async function fillHeader() {
    const welcomeTag = document.getElementById("welcome_greeting");
    const welcomeLang = document.getElementById("welcome_language");
    try {
        const greeting = await callGreetingsAPI();
        welcomeTag.innerHTML = greeting.greeting;
        welcomeLang.innerHTML = "Hello in " + greeting.language;
    } catch (error) {
        console.error("Error filling header:", error);
        // Handle the error as needed, e.g., display a default message or take other actions
    }
}

//Used to edit text in all forms
function editText(element) {
    const originalText = element.textContent;
    const input = document.createElement("input");
    input.value = originalText;
    element.textContent = "";
    element.appendChild(input);

    input.addEventListener("blur", function () {
      element.textContent = input.value;
    });

    input.focus();
  }