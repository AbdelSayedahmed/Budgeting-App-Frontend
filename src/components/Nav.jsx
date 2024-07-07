import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_URL);
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
        setTransactions([]);
      }
    };
    fetchTransactions();
  }, []);

  const getBudgetTotal = transactions.reduce((total, transaction) => {
    return transaction.category.toLowerCase() === "income"
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);

  const getBudgetTotalStyle = () => {
    if (getBudgetTotal > 100) {
      return { backgroundColor: "green", color: "white" };
    } else if (getBudgetTotal >= 0 && getBudgetTotal <= 100) {
      return { backgroundColor: "yellow", color: "black" };
    } else {
      return { backgroundColor: "red", color: "white" };
    }
  };

  return (
    <div className="nav-container">
      <h1>
        Budget<span>Wise</span>
      </h1>
      <div className="nav-container_minor">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/transactions/new">Add Transaction</Link>
        </nav>
        <div className="nav-container_budget" style={getBudgetTotalStyle()}>
          Budget Total: ${getBudgetTotal}
        </div>
      </div>
    </div>
  );
}
