# Notes!
9/15/2023 - In this exercise, I really appreciated the simplicity that git merge conflicts were explained with. I have had a hard time with merge conflicts in the past, but now I understand that they aren't as intimidating as I've made them out to be.

**Setup**
We created an ec2 server instance on Amazon AWS with Route 53 services for our leased DNS, holding them together with an elastic IP address (will never change, even when the server shuts off)

**Caddy**
We use caddy to serve as a proxy, negligating the need to manage individual ports on our webserver. Caddy will take in all the data, and call the correct functions from there based on the http request, etc.

**HTTPS**
Https basically provides a certificate via the free service _lets encrypt___ (something like that). It does this by validating that the info associated with the server you're requesting from matches the public data of the owner for the server, thus authenticating that this DNS is who they say they are.



## Midterm and Final Notes
In the following code, what does the link element do?
- Usually links a CSS sheet or a favicon
In the following code,  what does a div tag do?
- Divider
In the following code, what is the difference between the #title and .grid selector?
- (#) means select by id, . means select by class
In the following code, what is the difference between padding and margin?
- Padding affects the space inside an element, separating its content from its border.
- Margin controls the space outside an element, creating separation between that element and neighboring elements or the edge of its container.
Given this HTML and this CSS how will the images be displayed using flex?
- Lets things be squishy/responsive
What does the following code using arrow syntax function declaration do?
- Unnamed functions that return something
What does the following code output using getElementByID and addEventListener?
- Looks for an event and does that thing
What does the following line of Javascript do using a # selector?
- Select a css element prolly
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of:
- Inline aka no line break after its content (flows with stuff)
How would you display an image with a hyperlink in HTML?
- <img> tag
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

![image](https://github.com/Chaser2143/SnatchSolutions/assets/105551586/a2421118-daee-4f75-a25e-c24e34f5245b)

- Margin:

Margin defines the space outside of an element. It creates separation between the element and other elements or the edges of its containing element.
Margin is used to control the spacing between elements, affecting the layout of the entire page by specifying how much space an element should have around it.
Margin is controlled using the margin property in CSS, and you can set margins individually for each side (top, right, bottom, left) or all sides at once using shorthand notation.
Padding:

Padding defines the space between the content of an element and its inner border. It affects the spacing inside the element.
Padding is used to create space within an element, separating its content from its border.
Padding is controlled using the padding property in CSS, and like margin, you can set padding values individually for each side or all sides at once.
Border:

Border defines the lines that create the visible boundary of an element. It outlines the outer edge of an element.
Border is used to add a visible border around an element. It doesn't control spacing, but it does affect the visual appearance of the element.
Border is controlled using the border property in CSS. It specifies the width, style, and color of the border.

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph:
  Opening Tag: <p>
Ordered List:
  Opening Tag: <ol>
Unordered List:
  Opening Tag: <ul>
Second Level Heading (Heading Level 2):
  Opening Tag: <h2>
First Level Heading (Heading Level 1):
  Opening Tag: <h1>
Third Level Heading (Heading Level 3):
  Opening Tag: <h3>

How do you declare the document type to be html?
  <!DOCTYPE html>
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is is possible to add new properties to javascript objects?
  if (condition) {
    // Code to execute if the condition is true
  } else {
    // Code to execute if the condition is false
  }
  for (let i = 0; i < 5; i++) {
  // Code to be executed in each iteration
  }
  while (condition) {
  // Code to be executed while the condition is true
  }
  switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  // ...
  default:
    // Code to execute if expression does not match any case
  }
  const person = {
  firstName: "John",
  lastName: "Doe",
};

  // Adding a new property using dot notation
  person.age = 30;
  
  // Adding a new property using bracket notation
  person["job"] = "Engineer";

If you want to include JavaScript on an HTML page, which tag do you use?
<script></script>
Which of the following correctly describes JSON?
Java Script Object Notation
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- man gives manual
- ps gives process info
Which of the following console command creates a remote shell session?
ssh username@remote_server
Which of the following is true when the -la parameter is specified for the ls console command?
- a will list all files (even hidden)
- l will give all details (permissions)
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  Top : .click
  Sub : banana, fruit
  root : bozo
Is a web certificate is necessary to use HTTPS. Yes.
Can a DNS A record can point to an IP address or another A record.
- A DNS A record (Address record) is used to map a domain name to an IPv4 address. It cannot directly point to another A record or an IP address as its value. However, you can create a CNAME (Canonical Name) record, which is an alias for a domain name. This CNAME can point to another A record, effectively redirecting one domain to another. Alternatively, you can configure the DNS settings of a domain to use the A record of another domain by specifying its IP address.
Port 443, 80, 22 is reserved for which protocol?
443 : https
80 : http
22 : ssh
What will the following code using Promises output when executed?
- As for the async keyword in JavaScript, it is used to define asynchronous functions. Async functions allow you to write code that appears synchronous but is asynchronous behind the scenes. An async function always returns a Promise, which makes it easy to work with asynchronous operations using the await keyword.
Reduce Keyword (JS)
- Sums the numbers in the array given an accumulator value and a callback function
The DOM
- Javascript can modify the DOM
- DOM is a tree-structured representation of the HTML document used by the browser
Display an image with a hyperlink
- Use href in the <a> tag, not link

## Final Study Guide ##
What do HTTP status codes in the 300, 400, 500 range indicate?
300: Resource has moved/Redirect
400: Client Error
500: Server Error

What does the HTTP header content-type allows you to do?
The Content-Type HTTP header indicates the media type of the resource being sent in the HTTP message's body, allowing the recipient (usually a browser or client) to interpret and handle the content correctly.
Options are text/html, application/json, img/jpeg or img/png

What do the following attributes of a cookie do?
Domain - The Domain attribute of a cookie specifies which domain the cookie is valid for. It restricts the cookie's availability to a specific domain and its subdomains. 
Path - The Path attribute determines the URL path for which the cookie is valid. It restricts the cookie's availability to a specific path on the domain. For instance, a cookie set with the path /products will be sent to the server only for requests that match that path, like example.com/products/item1. It won't be sent for requests to other paths on the same domain.
SameSite - The SameSite attribute helps mitigate cross-site request forgery (CSRF) attacks by controlling whether a cookie should be sent with cross-site requests.
  Values : SameSite=None: Allows the cookie to be sent in cross-origin requests. However, for this attribute to work, the cookie must also be marked as secure (using the Secure attribute) and must be accessed via HTTPS.
  SameSite=Strict: The cookie is not sent with cross-site requests, providing a high level of protection against CSRF attacks.
  SameSite=Lax: Allows some exceptions for top-level navigations (like clicking a link) from external sites, but restricts the cookie in cross-origin POST requests (like submitting forms). This provides a balanced approach between security and usability.
HTTPOnly - The HttpOnly attribute is a security measure that, when set, restricts the cookie from being accessed by client-side scripts (such as JavaScript). It ensures that the cookie is only sent to the server with HTTP requests and cannot be accessed or manipulated by scripts running on the page. This helps prevent certain types of attacks, like cross-site scripting (XSS), where an attacker could attempt to steal sensitive information from cookies via malicious scripts injected into a website.

Ex MongDB Query : { cost: { $gt: 10 }, name: /fran.*/}
cost Field Greater Than ($gt) 10: This part of the query filters documents where the cost field's value is greater than ($gt) 10. It will retrieve documents where the cost field contains a numerical value greater than 10.
name Field Matches (/fran.*/): This part utilizes a regular expression (/fran.*/) to match documents where the name field contains a string that starts with "fran" followed by any number (including zero) of characters. The . in the regular expression matches any single character, and * quantifier indicates zero or more occurrences.

What is JSX and how are the curly braces rendered?
JSX (JavaScript XML) is a syntax extension used in React, a JavaScript library for building user interfaces. It allows developers to write HTML-like code directly within JavaScript, making it easier to create and manage UI components.

In JSX, curly braces {} are used for embedding JavaScript expressions or variables within the JSX code. This enables dynamic content rendering and the execution of JavaScript logic within the UI.

Ex : (Name is a JS variable and 2 + 2 goes in JS to become 4)
import React from 'react';

const MyComponent = () => {
  const name = 'World';
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>The result of 2 + 2 is: {2 + 2}</p>
    </div>
  );
};

export default MyComponent;

What are React Hooks used for? 
React Hooks are functions that allow functional components in React to use state, lifecycle methods, and other React features without writing a class
Commonly Used React Hooks:
useState: Allows functional components to manage local state. It returns a stateful value and a function to update that value, enabling the component to hold and update its state.

useEffect: Enables performing side effects in functional components. It runs after every render and can perform data fetching, subscriptions, or manual DOM manipulations.

useContext: Provides a way to consume a React context in functional components. It allows accessing the value provided by a Context.Provider higher up in the component tree.

useReducer: An alternative to useState, useReducer manages more complex state logic by dispatching actions to a reducer function.

useCallback and useMemo: These hooks optimize performance by memoizing functions or values, preventing unnecessary re-renders in certain cases.

useRef: Creates a mutable reference object that persists across renders, commonly used for accessing and working with DOM elements imperatively.

What is the useEffect hook used for?
useEffect allows you to perform side effects in functional components. It runs after every render, including the initial render, and after every update.
The useEffect hook takes two arguments:

Effect: A function that represents the side effect to be executed.
Dependency Array (Optional): An array of dependencies that determines when the effect will run. If the dependencies change between renders, the effect will re-run. If no dependencies are provided, the effect runs after every render.

What role does npm play in web development?
npm is a package manager which will install all dependencies listed in package.json

What does package.json do in a npm project?
Holds dependencies, project information and initiliazation stuff (custom startup script)

What does the fetch function do?
Used to make HTTP requests of basically any kind to a server in javascript
fetch() returns a Promise that resolves to the Response object representing the response to the request.
You can then get the status code with repsonse.ok and parse the json response with response.json()

What does node.js do?
Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript on the server. It provides an environment for executing JavaScript code outside of a web browser, enabling developers to build scalable and high-performance network applications.
Used for webdev, api's, etc (my whole startup is based on node)

What does Vite do?
Vite is a build tool for modern web development, primarily used with frameworks like Vue.js and React. It focuses on providing a fast and efficient development experience by leveraging native ES module support in modern browsers.
Fast Development Server: Vite offers a development server with hot module replacement (HMR), allowing for quick and efficient development by instantly updating the browser when changes are made to the codebase.
Basically, I think Vite compiled my local development server
