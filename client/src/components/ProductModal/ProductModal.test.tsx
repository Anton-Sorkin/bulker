import React from "react";
import ProdcutModal, { ProductModalProps } from "./ProductModal";
import { IFood } from "../../models/IFood";
import { fireEvent, render } from "@testing-library/react";

describe("ProdcutModal", () => {
  let wrapper: React.ReactElement;
  let toggleModal: jest.Mock;
  let product: IFood;

  beforeEach(() => {
    toggleModal = jest.fn();
    product = {
      title: "Pizza",
      ingredients: ["Dough", "Tomato Sauce", "Cheese"],
      _id: "1",
      img: "https://www.google.com",
      description: "A delicious pizza",
      category: "pizza",
      filter: "pizza",
      id: "1",
    };

    wrapper = <ProdcutModal toggleModal={toggleModal} product={product} />;
  });

  it("should render the product title", () => {
    const { getByText } = render(wrapper);
    expect(getByText(product.title)).toBeInTheDocument();
  });

  it("should render the product ingredients", () => {
    const { getAllByText } = render(wrapper);
    product.ingredients.forEach((ingredient) => {
      expect(getAllByText(ingredient).length).toEqual(1);
    });
  });

  it("should call toggleModal when the close button is clicked", () => {
    const { getByText } = render(wrapper);
    fireEvent.click(getByText("Close"));
    expect(toggleModal).toHaveBeenCalled();
  });
});
