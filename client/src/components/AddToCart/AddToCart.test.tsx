import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddToCart from "./AddToCart";
import { AddToCartProps } from "./AddToCart";

describe("AddToCart component", () => {
  test("should render correctly with isSetToGroceryList=false", () => {
    const addToGroceryList = jest.fn();
    const toggleConfirmedModal = jest.fn();
    const props: AddToCartProps = {
      isSetToGroceryList: false,
      addToGroceryList,
      toggleConfirmedModal,
    };
    const { getByText, asFragment } = render(<AddToCart {...props} />);
    const button = getByText("Add to Grocery List");
    fireEvent.click(button);
    expect(addToGroceryList).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render correctly with isSetToGroceryList=true", () => {
    const addToGroceryList = jest.fn();
    const toggleConfirmedModal = jest.fn();
    const props: AddToCartProps = {
      isSetToGroceryList: true,
      addToGroceryList,
      toggleConfirmedModal,
    };
    const { getByText, asFragment } = render(<AddToCart {...props} />);
    const button = getByText("Add Another Grocery List");
    fireEvent.click(button);
    expect(toggleConfirmedModal).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
});
