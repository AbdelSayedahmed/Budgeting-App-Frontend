# BudgetWise Frontend Application

This project is a frontend application for BudgetWise, a budgeting and transaction management tool. The application allows users to view, create, edit, and delete financial transactions, helping them manage their finances effectively.

## Features

- View a list of transactions with details.
- Add a new transaction.
- Edit an existing transaction.
- Delete a transaction.
- Calculate and display the total budget.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A collection of navigational components that compose declaratively with your application.
- Fetch API: For making HTTP requests to the backend server.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- npm: Node package manager, installed with Node.js.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/AbdelSayedahmed/budgeting-app-frontend.git
   cd budgeting-app-frontend
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:

```sh
npm run build
```

## Project Structure

```
src/
  ├── components/
  │   ├── EditTransaction.jsx
  │   ├── Home.jsx
  │   ├── Nav.jsx
  │   ├── NewTransaction.jsx
  │   ├── Transaction.jsx
  │   └── Transactions.jsx
  ├── App.jsx
  ├── functions.js
  ├── index.css
  └── index.js
public/
  ├── index.html
  └── ...
package.json
```

## Components

### `EditTransaction.jsx`

Allows users to edit an existing transaction. It fetches the transaction data by ID and populates the form, which can be submitted to update the transaction.

### `Home.jsx`

A simple component displaying a welcome message.

### `Nav.jsx`

The navigation bar with links to different sections of the application.

### `NewTransaction.jsx`

Provides a form to create a new transaction. Submitting the form sends a POST request to the backend.

### `Transaction.jsx`

Displays details of a single transaction. It allows users to delete or edit the transaction.

### `Transactions.jsx`

Fetches and displays a list of all transactions. It calculates and displays the total budget.

## Routes

The application uses React Router to handle routing. The routes are defined in `App.jsx`:

- `/`: Home page.
- `/transactions`: Displays a list of transactions.
- `/transactions/new`: Form to add a new transaction.
- `/transactions/:id`: View details of a single transaction.
- `/transactions/:id/edit`: Form to edit an existing transaction.

## Styling

Basic styling is included in `index.css`. You can customize the styles as needed.

## Scripts

- `start`: Starts the development server.
- `build`: Creates a production build.
- `test`: Runs tests.
- `eject`: Ejects the application, providing full control over the configuration.

## Dependencies

- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `react`
- `react-dom`
- `react-router-dom`
- `react-scripts`
- `web-vitals`
