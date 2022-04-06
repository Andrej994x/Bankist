import React, { useContext } from "react";
import "./Dashboard.css";
import Balance from "./Balance";
import Movements from "./Movements";
import Summary from "./Summary";
import Transfers from "./Transfers";
import LoanTransfers from "./LoanTransfers";
import CloseAcc from "./CloseAcc";
import { GlobalContex } from "../contex/GlobalState";

const Dashboard = () => {
  const { accounts } = useContext(GlobalContex);

  return (
    <div className="app">
      <Balance />
      <Movements />
      <Summary />
      <Transfers />
      <LoanTransfers />
      <CloseAcc />
    </div>
  );
};

export default Dashboard;
