import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  // Map through the trans to get the amounts
  const amounts = transactions.map(transactions => transactions.amount);
  console.log(amounts, "this is amounts");
  // total adds all the amounts together and set it to to decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
