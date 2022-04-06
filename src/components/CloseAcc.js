import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContex } from "../contex/GlobalState";

const CloseAcc = () => {
  const { accounts } = useContext(GlobalContex);

  const [user, setUser] = useState("");
  const [pin, setPin] = useState("");

  const closeAcc = () => {
    const loggedUser = accounts.find((account) => {
      return account.pin === parseInt(pin) && account.userName === user;
    });

    if (loggedUser) {
      localStorage.clear();
      navigate("/");
    } else {
      alert("Error with username or pin");
    }
  };
  let navigate = useNavigate();
  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close">
        <input
          type="text"
          className="form__input form__input--user"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          maxLength="6"
          className="form__input form__input--pin"
          onChange={(e) => setPin(e.target.value)}
        />
        <button onClick={closeAcc} className="form__btn form__btn--close">
          &rarr;
        </button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
      </form>
    </div>
  );
};

export default CloseAcc;
