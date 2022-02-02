import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as PlanetLogo } from "../Assets/planetsvg.svg";
import AppContext from "../Context/Appcontext";
import { increseQuantity, decreaseQuantity } from "../Utils/Utils";
import "./Item.css";

const Item = ({ data }) => {
  const { items, updatingItems } = useContext(AppContext);
  const [quantity, setquantity] = useState(data.quantity);

  const increment = (id) => {
    setquantity((count) => count + 1);
    const arrayAfterIncrement = increseQuantity(items, id);
    updatingItems([...arrayAfterIncrement]);
    localStorage.setItem(id, Number(data.quantity));
  };

  const decrement = (id) => {
    if (quantity > 0) {
      setquantity((count) => count - 1);
      const arrayAfterDecrement = decreaseQuantity(items, id);
      updatingItems([...arrayAfterDecrement]);
      localStorage.setItem(id, data.quantity);
    }
  };

  useEffect(() => {
    localStorage.setItem(data.id, data.quantity);
  }, []);

  return (
    <div className="item">
      <div className="planetlogo">
        <PlanetLogo />
      </div>
      <div className="title-desc">
        <span>{data.title}</span>
        <p>{data.desc}</p>
      </div>
      <div className="inc-dec">
        <div
          className="minus"
          data-testid="decreaseQuantity"
          onClick={() => decrement(data.id)}
        ></div>
        <div className="quantity">
          <p data-testid="quantity">{data.quantity}</p>
        </div>
        <div
          className="plus"
          data-testid="increseQuantity"
          onClick={() => increment(data.id)}
        >
          <div className="horizontal"></div>
          <div className="vertical"></div>
        </div>
      </div>
      <span className="currency">{data.currency + data.price}</span>
    </div>
  );
};

export default Item;
