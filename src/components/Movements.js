import React, { useContext } from "react";

const Movements = (props) => {
  const movements = localStorage.getItem("movements").split(",");

  return (
    <div className="movements">
      {movements.map((mov) => {
        return (
          <div key={mov} className="movements__row">
            {mov > 0 ? (
              <div className="movements__type movements__type--deposit">
                {mov > 0 ? "deposit" : "withdrawal"}
              </div>
            ) : (
              <div className="movements__type movements__type--withdrawal">
                {mov > 0 ? "deposit" : "withdrawal"}
              </div>
            )}

            <div className="movements__date">3 days ago</div>
            <div className="movements__value">{mov} €</div>
          </div>
        );
      })}
      <div className="movements__row">
        <div className="movements__type movements__type--withdrawal">
          1 withdrawal
        </div>
        <div className="movements__date">24/01/2037</div>
        <div className="movements__value">-378€</div>
      </div>
    </div>
  );
};

export default Movements;
