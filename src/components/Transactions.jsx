import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatter1, dateFormatter2 } from "../functions";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error("Error fetching transactions: ", error);
        setTransactions([]);
      });
  }, []);

  return (
    <div className="transactions-container">
      <div>
        <h3>Date</h3>
        <h3>Name</h3>
        <h3>Amount</h3>
      </div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>
            {dateFormatter2(transaction.date)} (
            {dateFormatter1(transaction.date)})
          </p>
          <p>{transaction.name}</p>
          <p>${transaction.amount}</p>
          <Link to={`${transaction.id}`}>View Transaction</Link>
        </div>
      ))}
    </div>
  );
}
