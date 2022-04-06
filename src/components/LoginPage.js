import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { GlobalContex } from "../contex/GlobalState";

const LoginPage = () => {
  const { accounts } = useContext(GlobalContex);

  const [user, setUser] = useState("");
  const [pin, setPin] = useState("");

  let navigate = useNavigate();

  const onClick = () => {
    const loggedUser = accounts.find((account) => {
      return account.pin === parseInt(pin) && account.userName === user;
    });

    if (loggedUser) {
      localStorage.setItem("movements", loggedUser.movements);
      localStorage.setItem("owner", loggedUser.owner);
      navigate("/dashboard");
    } else {
      alert("Error");
    }
  };

  return (
    <nav>
      <p className="welcome">Log in to get started</p>

      <img src={logo} alt="Logo" className="logo" />

      <form className="login">
        <input
          type="text"
          placeholder="user"
          className="login__input login__input--user"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="text"
          placeholder="PIN"
          maxLength="4"
          className="login__input login__input--pin"
          onChange={(e) => setPin(e.target.value)}
        />
        <button type="button" onClick={onClick} className="login__btn">
          &rarr;
        </button>
      </form>
    </nav>
  );
};

export default LoginPage;
