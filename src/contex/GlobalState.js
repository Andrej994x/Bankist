import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  accounts: [
    {
      id: 1,
      owner: "Jonas Schmedtmann",
      userName: "js",
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2,
      pin: 1111,
    },
    {
      id: 2,
      owner: "Jessica Davis",
      userName: "jd",
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    },
    {
      id: 3,
      owner: "Steven Thomas Williams",
      userName: "st",
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    },
    {
      id: 4,
      owner: "Sarah Smith",
      userName: "ss",
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    },
  ],
};

export const GlobalContex = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContex.Provider
      value={{
        accounts: state.accounts,
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
