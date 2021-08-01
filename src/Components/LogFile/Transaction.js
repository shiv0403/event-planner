import React from "react";

import "./Transaction.css";

function Transaction({ from, to, amount, date }) {
  return (
    <div className="transaction">
      <p>{from}</p>
      <p>{to}</p>
      <p>{amount}</p>
      <p>{date}</p>
    </div>
  );
}

export default Transaction;
