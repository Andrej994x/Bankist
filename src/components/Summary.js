import React from "react";

const Summary = () => {
  const movements = localStorage.getItem("movements").split(",");
  const displatBalance = movements.map(Number);

  const out = displatBalance
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const incomes = displatBalance
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = displatBalance
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * displatBalance.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{incomes}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{out}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">{interest}€</p>
      <button className="btn--sort"> SORT</button>
    </div>
  );
};

export default Summary;
