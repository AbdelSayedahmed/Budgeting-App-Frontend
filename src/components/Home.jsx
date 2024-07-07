import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to BudgetWise</h2>
      <p>BudgetWise is your go-to tool for managing your finances efficiently. Here's how you can make the most out of our app:</p>
      <ul>
        <li><strong>View Transactions:</strong> Browse all your financial transactions in one place. See details like the name, amount, date, source, and category of each transaction.</li>
        <li><strong>Add a New Transaction:</strong> Easily add new transactions to keep your budget up to date. Just fill in the details and submit!</li>
        <li><strong>Edit Transactions:</strong> Need to make changes to an existing transaction? No problem! Simply edit and update the details as needed.</li>
        <li><strong>Delete Transactions:</strong> Remove any transaction that you no longer need with just a click.</li>
        <li><strong>Track Your Budget:</strong> See your total budget calculated dynamically based on your income and expenses.</li>
      </ul>
      <p>Navigate through the links in the menu to get started. BudgetWise helps you stay on top of your finances with ease and simplicity. Enjoy managing your budget better!</p>
    </div>
  );
}
