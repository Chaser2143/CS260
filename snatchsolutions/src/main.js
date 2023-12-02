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

// //place holder for websocket
// setInterval(() => {
//     const loginText = document.querySelector('#loginWebsocket');
//     if (Math.random() > 0.5){
//         if(Math.random() > 0.7){
//             loginText.innerHTML = "Carl Wheezer Logged In";
//         }
//         else if(Math.random() > 0.8){
//             loginText.innerHTML = "Sheen Estevez Logged In";
//         }
//         else{
//             loginText.innerHTML = "Jimmy Neutron Logged In";
//         }
//     }
//     else{
//         loginText.innerHTML = "";
//     }
//     }, 2000);

//---------------NEW Websocket Section -----------------------
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
    setMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
    const text = await event.data.text();
    const username = JSON.parse(text);
    setMsg('system', 'websocket', username.text);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
    setMsg('system', 'websocket', 'disconnected');
};

// Send a message over the webSocket
function sendMessage(msg) {
    socket.send(`{"text":"${msg}"}`);
  }

// Set the message on the html page
function setMsg(cls, from, msg) {
    const loginText = document.querySelector('#loginWebsocket');
    switch(msg.toString()) {
        case "connected":
          loginText.innerHTML = "Websocket Connected";
          break;
        case "disconnected":
          loginText.innerHTML = "Websocket Disconnected";
          break;
        default:
            loginText.innerHTML = msg + " Logged In";
      }
  }