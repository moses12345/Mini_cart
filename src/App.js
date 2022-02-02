import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./App.css";
import Item from "./Components/Item";
import Nav from "./Components/CartHeader";
import AppContext from "./Context/Appcontext";

const App = () => {
  const [items, setitems] = useState(null);

  const updatingItems = useCallback(
    (array) => {
      setitems(array);
    },
    [items]
  );

  const getInitaldata = async () => {
    const { data } = await axios.get(
      "https://dnc0cmt2n557n.cloudfront.net/products.json"
    );

    if (localStorage.getItem("total") === null) {
      data.products.map((data) => {
        data["quantity"] = 1;
      });
      const getInitaltotal = data.products.reduce(
        (prev, curr) => curr.quantity * Number(curr.price) + prev,
        0
      );
      localStorage.setItem("total", getInitaltotal);
    } else {
      data.products.map((data) => {
        data["quantity"] = Number(localStorage.getItem(data.id));
      });
    }
    setitems(data.products);
  };

  useEffect(() => {
    getInitaldata();
  }, []);

  return (
    <AppContext.Provider
      value={{
        items,
        updatingItems,
      }}
    >
      <div>
        <Nav />
        {items && (
          <>
            {items.map((data) => (
              <Item key={data.id} data={data} />
            ))}
          </>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;
