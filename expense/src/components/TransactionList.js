import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  // console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(trans => (
          <Transaction key={trans.id} transaction={trans} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
