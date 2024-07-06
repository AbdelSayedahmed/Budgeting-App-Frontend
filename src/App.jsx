import React from "react";
import { Routes, Route } from "react-router-dom";

import EditTransaction from "./components/EditTransaction";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewTransaction from "./components/NewTransaction";
import Transaction from "./components/Transaction";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/new" element={<NewTransaction />} />
        <Route path="/transactions/:id" element={<Transaction />} />
        <Route path="/transactions/:id/edit" element={<EditTransaction />} />
      </Routes>
    </>
  );
}

export default App;
