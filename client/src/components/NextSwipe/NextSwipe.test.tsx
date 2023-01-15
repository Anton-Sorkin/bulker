import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NextSwipe, { NextSwipeProps } from "./NextSwipe";

describe("NextSwipe", () => {
  let props: NextSwipeProps;

  beforeEach(() => {
    props = {
      handleNextProduct: jest.fn(),
      handleAddAndNextProduct: jest.fn(),
    };
  });

  it("should call handleNextProduct when the Next product button is clicked", () => {
    const { getByText } = render(<NextSwipe {...props} />);
    const button = getByText("Next product");
    fireEvent.click(button);
    expect(props.handleNextProduct).toHaveBeenCalled();
  });

  it("should call handleAddAndNextProduct when the Add it and next product button is clicked", () => {
    const { getByText } = render(<NextSwipe {...props} />);
    const button = getByText("Add it and next product");
    fireEvent.click(button);
    expect(props.handleAddAndNextProduct).toHaveBeenCalled();
  });
});
