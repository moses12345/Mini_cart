import { increseQuantity, decreaseQuantity } from "../Utils.js";

const mockData = [
  {
    id: "123442",
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/product1.jpeg",
    price: "39",
    currency: "$",
    quantity: 1,
  },
  {
    id: "123443",
    title: "Product 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/product2.jpeg",
    price: "39",
    currency: "$",
    quantity: 1,
  },
];

test('utils/increment', () => {
    const increment = increseQuantity(mockData, "123442");
    expect(increment[0]["quantity"]).toEqual(2);
});
test("utils/decrement", () => {
  const decrement = decreaseQuantity(mockData, "123442");
  expect(decrement[0]["quantity"]).toEqual(1);
});
