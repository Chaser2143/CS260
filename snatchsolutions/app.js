//Used as the base for connecting all my js files
const express = require('express');
const app = express();

const port = 8080;

app.use(express.static('public'));

app.use(express.static('src'));

app.listen(port);

console.log("Server running on " + port);


var budgets = [] //Will eventually be accessed by services