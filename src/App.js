import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Balance from "./components/Balance";
import Movements from "./components/Movements";
import Summary from "./components/Summary";
import Transfers from "./components/Transfers";
import LoanTransfers from "./components/LoanTransfers";
import CloseAcc from "./components/CloseAcc";
import { GlobalProvider } from "./contex/GlobalState";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route
          path="/dashboard"
          element={
            <Dashboard>
              <Balance />
              <Movements />
              <Summary />
              <Transfers />
              <LoanTransfers />
              <CloseAcc />
            </Dashboard>
          }
        ></Route>
      </Routes>
    </GlobalProvider>
  );
}

export default App;
