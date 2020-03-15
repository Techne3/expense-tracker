import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";

import "./App.css";
import TransactionList from "./components/TransactionList";
import AddTransation from "./components/AddTransation";

function App() {
  return (
    <div>
      <Header />
      <div className="containier">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransation />
      </div>
    </div>
  );
}

export default App;
