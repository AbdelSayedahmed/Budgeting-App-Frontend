import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTransaction() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    fetch(`http://localhost:6298/transactions/${id}`)
      .then((response) => response.json())
      .then((data) => setForm(data));
  }, [id]);

  async function updateTransaction(transaction) {
    const options = {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`http://localhost:6298/transactions/${id}`, options);
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
    updateTransaction(form).then((updatedTransaction) => {
      navigate(`/transactions/${updatedTransaction.id}`);
    });
  };

  return (
    <div className="edit-form-container">
      <h1>Edit Transaction</h1>
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
        <button type="submit">Update Transaction</button>
      </form>
    </div>
  );
}
