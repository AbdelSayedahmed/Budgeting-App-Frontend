import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <h1>Budget<span>Wise</span></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/transactions/new">Add Transaction</Link>
      </nav>
    </div>
  );
}
