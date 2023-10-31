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
- # means select by id, . means select by class
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
