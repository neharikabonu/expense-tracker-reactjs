# Expense Tracker

**Live at : https://neharikabonu.github.io/expense-tracker-reactjs/**

A responsive **Expense Tracker web application** built with React to manage income and expenses in a simple and user-friendly interface.

The application allows users to add, edit, delete, filter, and persist transactions using the browser's `localStorage`.

## Features

* Add income and expense transactions
* Edit existing transactions
* Delete individual transactions
* Clear all transactions with confirmation
* Filter transactions by:

  * All
  * Income
  * Expenses
* Display total balance, income, and expenses
* Show the number of filtered transactions
* Persist transaction data using `localStorage`
* Scrollable transaction list
* Responsive layout for desktop and mobile screens
* Form validation for transaction inputs

## Technologies Used

* **React**
* **JavaScript**
* **HTML**
* **CSS**
* **Vite**
* **Browser localStorage**

## React Concepts Practiced

This project helped me practice and understand:

* Functional Components
* Props
* `useState`
* `useEffect`
* Controlled Forms
* Event Handling
* Conditional Rendering
* Array methods such as `map()`, `filter()`, and `reduce()`
* Component-based architecture
* Data persistence with `localStorage`

## Project Structure

```text
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── summary/
│   │   ├── Summary.jsx
│   │   └── Summary.css
│   │
│   ├── TransactionForm.jsx
│   ├── TransactionForm.css
│   ├── TransactionList.jsx
│   ├── TransactionList.css
│   ├── TransactionItem.jsx
│   └── TransactionItem.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## How It Works

Transactions are stored as objects containing:

```javascript
{
  id,
  title,
  amount,
  type
}
```

The application uses React state to manage transactions and `localStorage` to preserve them even after the browser is refreshed.

The dashboard calculates:

```text
Balance = Total Income - Total Expenses
```

Transactions can then be filtered based on their type without modifying the original transaction data.

## Responsive Design

The application uses CSS media queries to adapt the layout for different screen sizes.

On larger screens:

```text
┌──────────────────────┬─────────────────────────┐
│   Transaction Form   │   Filters + Transactions│
│                      │                         │
│                      │   Scrollable List       │
└──────────────────────┴─────────────────────────┘
```

On smaller screens, the sections stack vertically for easier use on mobile devices.

## What I Learned

Building this project gave me practical experience in creating a React application from scratch and helped me understand how different React concepts work together in a real project.

I particularly practiced **state management, controlled forms, component communication, data persistence, filtering, and responsive UI design**.

## Future Improvements

Some features that could be added in the future:

* Expense categories
* Date-based transaction history
* Charts and spending analytics
* Monthly expense summaries
* Export transactions
* Dark mode

---

### Author

**Neharika Bonu**

B.Tech CSE Graduate | Frontend Developer

