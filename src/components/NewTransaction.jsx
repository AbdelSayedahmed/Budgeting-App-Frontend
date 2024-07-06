import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewTransaction() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  async function createTransaction(transaction) {
    const options = {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch("http://localhost:6298/transactions", options);
    return await response.json();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransaction(form).then((newTransaction) => {
      navigate(`/transactions/${newTransaction.id}`);
    });
  };

  return (
    <div className="new-form-container">
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={form.from}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Transaction</button>
      </form>
    </div>
  );
}
