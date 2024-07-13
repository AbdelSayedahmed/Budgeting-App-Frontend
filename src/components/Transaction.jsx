import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dateFormatter2 } from "../functions";

export default function Transaction() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function getTransaction(transId) {
    const response = await fetch(`${process.env.REACT_APP_URL}${transId}`);
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
        `${process.env.REACT_APP_URL}${id}`,
        options
      );
      if (response.ok) {
        setTransaction({});
        navigate("/transactions");
        window.location.reload();
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
      <h4>
        <strong>From:</strong> {transaction.from}
      </h4>
      <p>
        <strong>Amount:</strong> ${transaction.amount}
      </p>
      <p>
        <strong>Date:</strong> {dateFormatter2(transaction.date)}
      </p>
      <p>
        <strong>Category:</strong> {transaction.category}
      </p>
      <div>
        <button onClick={() => navigate(`/transactions/${id}/edit`)}>
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
