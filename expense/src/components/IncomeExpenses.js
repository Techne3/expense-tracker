import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  //
  const amounts = transactions.map(trans => trans.amount);

  // once we get the amounts we filter through anything > 0
  // then use reduce to add them all together
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // once we get the amounts we filter through anything < 0
  // then use reduce to subtract them all together
  const expense =
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
