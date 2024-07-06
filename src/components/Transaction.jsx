import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Transaction() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function getTransaction(transId) {
    const response = await fetch(`http://localhost:6298/transactions/${transId}`);
    return await response.json();
  }

  useEffect(() => {
    getTransaction(id)
      .then((data) => setTransaction(data))
      .catch((error) => `Fetching transaction failed: ${error}`);
  }, [id]);

  async function handleDelete() {
    try {
      const options = { method: "DELETE" };
      const response = await fetch(
        `http://localhost:6298/transactions/${id}`,
        options
      );
      if (response.ok) {
        setTransaction({});
        navigate("/transactions");
      } else {
        console.error("Failed to delete transaction:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  }

  return (
    <div className="transaction-container">
      <h3>{transaction.name}</h3>
      <h4>From: {transaction.from}</h4>
      <p>Amount: {transaction.amount}</p>
      <p>Date: {transaction.date}</p>
      <p>Category: {transaction.category}</p>
      <button onClick={() => navigate(`/transactions/${id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
