import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Item from "./Components/Item";

afterEach(cleanup);

test("render item", () => {
  const data = {
    id: "123442",
    title: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: "/product1.jpeg",
    price: "39",
    currency: "$",
    quantity: 1,
  };
  render(<Item data={data} />);

  expect(Number(screen.getByTestId("quantity").textContent)).toEqual(1);

  const checkIncrement = fireEvent.click(screen.getByTestId("increseQuantity"));
  expect(checkIncrement).toBe(true);

  const checkDecrement = fireEvent.click(
    screen.getByTestId("decreaseQuantity")
  );
  expect(checkDecrement).toBe(true);
});
