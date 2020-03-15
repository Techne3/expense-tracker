import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  // Map through the trans to get the amounts
  const amount = transactions.map(transactions => transactions.amount);
  // total adds all the amounts together and set it to to decimal places
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
