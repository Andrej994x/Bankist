import React from "react";
import "./Balance.css";

const Balance = () => {
  const movements = localStorage.getItem("movements").split(",");
  const displatBalance = movements.map(Number);

  const userIsLoged = localStorage.getItem("owner").split(" ")[0];

  const balance = displatBalance.reduce((acc, mov) => acc + mov, 0);

  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">05/03/2037</span>
        </p>
      </div>
      <p className="balance__value">{balance}€</p>
      <div className="curUser">
        <h2> Welcome back {userIsLoged} </h2>
      </div>
    </div>
  );
};

export default Balance;
