import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "@testing-library/react";
import AddButton from "../components/AddButon";
import { CartContext, CartProvider } from "../context/CartContext";

const renderWithContext = (component) => {
  return {
    ...render(<CartProvider value={CartContext}>{component}</CartProvider>),
  };
};

afterEach(cleanup);

it("checks button initial value", async () => {
  const { getByTestId } = renderWithContext(<AddButton />);

  expect(getByTestId("button-add")).toHaveTextContent("Add to Cart");
});

it("checks button callback on click", async () => {
  const { getByTestId, getByText } = renderWithContext(<AddButton />);

  fireEvent.click(getByTestId("button-add"));
  expect(getByTestId("button-add")).toHaveTextContent(
    "Item added to the cart!"
  );
  const buttonText = await waitForElement(() => getByText("Add to Cart"));
  expect(buttonText).toHaveTextContent("Add to Cart");
});
