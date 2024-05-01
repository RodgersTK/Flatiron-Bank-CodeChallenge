import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList() {

  const [transactions, setTransactions] = useState([])

  useEffect( ()=> {
    fetch('http://localhost:8001/transactions')
  .then((response) => response.json())
  .then((data) => {
    setTransactions(data)
  } );
  }, [])

  const handleDelete = (id) => {
    fetch('http://localhost:8001/transactions/{id}', {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
      setTransactions(transactions.filter((trans) => trans.id !== id));
    })
  }

  console.log(transactions)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
      
         {transactions && transactions.map((trans) => (
            <tr key = {trans.id}>
            <th>
              <p>{trans.date}</p>
            </th>
            <th>
              <p>{trans.description}</p>
            </th>
            <th>
              <p>{trans.category} </p>
            </th>
            <th>
              <p>{trans.amount} </p>
            </th>
            <th><button onClick={()=> handleDelete(trans.id)}>Delete</button></th>

          </tr>
         ))}      
      </tbody>   
    </table>
  );

}

export default TransactionsList;
