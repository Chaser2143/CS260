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

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - 5 Different Pages; Index(About), Login, Console, Quick Expense, and Budget Template
- **Links** - Within each page linking to the other html pages as necessary
- **Text** - Within each page, but most especially within the about page
- **Images** - Within mostly each page, but mostly the about page
- The landing page also holds a picture of a dog which is my placeholder for a 3rd party service, which provides a random picture of a dog everytime its called.
- **Login** - Within the login page
- **Database** - Will be accessed via console.html and budget template (Placeholder marked on console page)
- **WebSocket** - Will be accessed within Quick Expense (Placeholder marked on quickExpense page)

![image](https://github.com/Chaser2143/SnatchSolutions/assets/105551586/d409512d-5e20-4a57-923e-a88f9f6cd3d5)

## CSS Deliverable

For this deliverable, I styled the CSS of my startup, mostly using bootstrap.

- **Header, footer, and main content body**
- **Navigation elements** - I added a really nice drop down and styled all my buttons
- **Responsive to window resizing** - My app looks great on all window sizes (works great on phones)
- **Application elements** - UI is clear and simple
- **Application text content** - Properly styled to my liking
- **Application images** - Images have been added; Moving from my old dog pic api to a greetings API

## JavaScript Deliverable

For this deliverable, I added the JS foundations for the future implementations on the site.

- **Login Support** - I saved the username and password from the login page into the user's local storage as a user object, and moved them on to the budget console page. In the future, I can change these to be verified in the DB before moving them onward.
- **Interaction Logic Support** - Expense objects are created and loaded into local storage from the quick expense page. Login page also calls a web service which greets the user in a new language.
- **Websocket Support** - Implemented proper class structure to facilitate updating in realtime. This is more behind the scenes, as I need to redo my budgetTemplate.html into a form so we can instantiate these things.
- Because of the design of users, budgets, and expenses dynamically loading, every change will automatically be reflected when the user loads the page. So if multiple people (a couple) share an account, they will both always see updated information in realtime.
- **Future Database Support** - Every place where I put something into local storage will eventually go into a database (User Info, Expenses, and Budgets/Categories in the future). Everything I put into local storage is organized into a class of some kind, which will interact well and keep everything organized as it needs to be.

**Future Work**
- When these objects (budgets) are loaded, I will have them do the calculations for amounts and such. This could also implement some kind of cacheing which will check if anything has been changed since it was last calculated.
- Dynamically update drop downs from the budgets available and their categories in quick expense
- Change Budget Template to a form so we can instantiate it

Note: The magnitude of this project grew seemingly exponentially at this step, especially for all the bells and whistles (dynamic expense loading, drop downs being up to date with budgets, how much to load on each page, creating a new budget form, etc). Although many of these things do use JavaScript, they also required a pretty decent amount of html and css mending, which I did not anticipate. Since each deliverable is supposed to be about 100 lines of code, I hope you'll have mercy on me for this one, as I definitely wrote that amount. I have tried to implement the skeleton for everything in this deliverable, but because of the magnitude of growth here, as well as the need for a DB and react to implement many of these features effectively (dynamic page loading with budgets and expenses), I hope you'll accept it for what it is.
