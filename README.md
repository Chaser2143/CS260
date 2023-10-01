# Snatch Budget App

  **Snatch Solutions** proudly presents the _Snatch Budgeting App__ for all your budgeting needs. _Snatch Budget_ features a simple, easy to use GUI meant to make budgeting a fluid practice, especially on the go. _Snatch Budget_ breaks down expense periods into paychecks, so each set of expenses can always be filed in a structured budget. _Snatch Budget_ promises ease of use for the populus to help everyone organize finances in a quick and simple manner.

  _Snatch Budget_ will feature an authenticated login/logout system, where each user is able to create their own budget, enter in corresponding expenses, and see the budget update instantly. These feautures will be held within a secure database, promising data privacy for all users.

  To use _Snatch Budget_, a user will first enter in a paycheck. Paychecks are always associated with budgets in this system. The corresponding budget will be tied to a date, and will feature various categories that the paycheck can be split into (mirroring the envelope system). Once a paycheck is made, users can register expenses to the paycheck budget on the go. Each paycheck/budget will feature a breakdown of the expenses made. Future work could include data analysis of spending habits, pay amounts, and more.

![image](https://github.com/Chaser2143/SnatchSolutions/assets/105551586/b6839700-19ad-416f-8e39-82f9c85086cc)

### Key features
- Https Login Page
- Dynamically Loaded Budgets from DB
- Ability to create a new budget and load it with data
- Ability to easily add an expense from the budgets page for _on the go__ expenses
- Budget amounts load from expenses, so each budget is always up to date

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Structure for each page of the web app (login, budget overview, budget, quick expense)
- **CSS** - Styling for each page of the web app ^
- **JavaScript** - Communicates with the DB to log users in, fetch corresponding budget data, create budgets and edit them on the go
- **Service** - Backend service endpoints for
- Login Page
- Loading all budgets chronilogically
- Registering a new budget
- Editing an existing budget (on the go expense)
- **DB** - Holds all the budget and expense data under each individual user
- **Login** - Users will be registered if they don't have an account. If they do, associated data will be loaded
- **WebSocket** - Methods for posting and requesting to and from budgets
- **React** - Dynamically loads budgets, serves for the template page for budgets and expenses

## HTML deliverable (Example Section - Needs Editing)

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - 5 Different Pages; Index(About), Login, Console, Quick Expense, and Budget Template
- **Links** - Within each page linking to the other html pages as necessary
- **Text** - Within each page, but most especially within the about page
- **Images** - Within mostly each page, but mostly the about page
- **Login** - Within the login page
- **Database** - Will be accessed via console.html and budget template
- **WebSocket** - Will be accessed within Quick Expense

![image](https://github.com/Chaser2143/SnatchSolutions/assets/105551586/d409512d-5e20-4a57-923e-a88f9f6cd3d5)
