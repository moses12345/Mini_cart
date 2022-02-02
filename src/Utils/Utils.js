const increseQuantity = (array, id, quantity) => {
  const value = array.map((item) => {
    if (item.id === id) {
      item.quantity += 1;
    }
    return item;
  });
  return value;
};

const decreaseQuantity = (array, id) => {
  const value = array.map((item) => {
    if (item.id === id) {
      item.quantity = item.quantity - 1;
    }
    return item
  });
  return value;
};

export {increseQuantity,decreaseQuantity}
