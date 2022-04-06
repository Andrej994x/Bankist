import React, { useState, useContext } from "react";
import { GlobalContex } from "../contex/GlobalState";

const Transfers = () => {
  const { accounts } = useContext(GlobalContex);
  const movements = localStorage.getItem("movements").split(",");
  const displatBalance = movements.map(Number);

  const loggedUser = localStorage.getItem("owner").split(" ")[0];
  const balance = displatBalance.reduce((acc, mov) => acc + mov, 0);
  // console.log(loggedUser);

  // console.log(balance);

  const [transferTo, setTransferTo] = useState("");
  const [amount, setAmount] = useState("");

  const onClick = () => {
    const transferAcc = accounts.find((account) => {
      return account.userName === transferTo && parseInt(amount) > 0;
    });
    if (transferAcc) {
      movements.push(amount);
      console.log(transferAcc);
    }
  };

  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer">
        <input
          onChange={(e) => setTransferTo(e.target.value)}
          type="text"
          className="form__input form__input--to"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="form__input form__input--amount"
        />
        <button
          type="button"
          onClick={onClick}
          className="form__btn form__btn--transfer"
        >
          &rarr;
        </button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
};

export default Transfers;
