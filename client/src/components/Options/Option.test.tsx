import Options, { OptionsProps } from "./Options";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders options", () => {
  const getGroceryList = jest.fn();
  const { getByText } = render(
    <MemoryRouter>
      <Options getGroceryList={getGroceryList} />
    </MemoryRouter>
  );
  expect(getByText("Options")).toBeInTheDocument();
});

test("delete all button removes local storage and calls getGroceryList", () => {
  const getGroceryList = jest.fn();
  localStorage.setItem(
    "groceryList",
    JSON.stringify([{ name: "milk", quantity: 1 }])
  );
  const { getByText } = render(
    <MemoryRouter>
      <Options getGroceryList={getGroceryList} />
    </MemoryRouter>
  );
  fireEvent.click(getByText("Delete all"));
  expect(localStorage.getItem("groceryList")).toBe(null);
  expect(getGroceryList).toHaveBeenCalled();
});

test("back to home button navigates to home page", () => {
  const getGroceryList = jest.fn();
  const { getByText } = render(
    <MemoryRouter initialEntries={["/options"]}>
      <Options getGroceryList={getGroceryList} />
    </MemoryRouter>
  );
  fireEvent.click(getByText("Back to home"));
  expect(window.location.pathname).toBe("/");
});
