import React, { useState, useContext } from "react";
import AppContext from "../Context/Appcontext";
import { ReactComponent as CartLogo } from "../Assets/cart.svg";
import { ReactComponent as PlusLogo } from "../Assets/plus.svg";
import "./CartHeader.css";

const Nav = () => {
  const [showItems, setshowItems] = useState(false);
  const { items, updatingItems } = useContext(AppContext);

  const totalAmount = items?.reduce((prev, curr) => {
    localStorage.setItem("total", Number(curr.price) * curr.quantity + prev);
    return Number(curr.price) * curr.quantity + prev;
  }, 0);

  // ITEMS WILL BE FILTERED IT THE QUANTITY IS MORE THAN OR EQUAL TO 1
  const itemsInBasketFiltered = items?.filter((data) => {
    if (data.quantity > 0) {
      return data;
    }
  });

  // TOTAL NUMBER OF ITEMS USER HAS SELECTED
  const itemsInBasket = itemsInBasketFiltered?.reduce(
    (prev, curr) => curr.quantity + prev,
    0
  );

  // TO SEE SELECTED ITEMS
  const seeItems = () => {
    setshowItems((value) => !value);
  };

  // TO DELETE AN ITEM FROM THE CART
  const deleteItem = (id) => {
    items.map((data) => {
      if (data.id === id) {
        data.quantity = 0;
        return data;
      }
    });
   updatingItems([...items]);
    localStorage.setItem(id, 0);
  };

  return (
    <div className="nav-wrapper">
      <div className="topnav">
        <div className="topnav-right" onClick={() => seeItems()}>
          <div>
            <div>{items && items[0]?.currency + totalAmount}</div>
            <div className="items">
              <div>
                {itemsInBasket + " " + (itemsInBasket > 1 ? "Items" : "Item")}
              </div>
              <div>
                <div className="triangle"></div>
                {showItems && <div className="triangle-upside"></div>}
              </div>
            </div>
          </div>
          <CartLogo />
        </div>
      </div>
      {showItems && (
        <div className="Items-in-cart">
          {itemsInBasketFiltered.length > 0 ? (
            itemsInBasketFiltered.map((data) => (
              <div key={data.id} className="product-with-quantity">
                <div onClick={() => deleteItem(data.id)} className="circle">
                  <PlusLogo className="cancel-item" />
                </div>
                <div className="product-price">
                  <div>{data.title}</div>
                  <div>{data.currency + data.price}</div>
                </div>
                <div>{"Qty" + "  " + data.quantity}</div>
              </div>
            ))
          ) : (
            <div>Your Cart Is Empty Please Start Shopping</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
