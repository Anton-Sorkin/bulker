import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ConfirmModal, { ConfirmModalProps } from "./ConfirmModal";

describe("ConfirmModal", () => {
  let props: ConfirmModalProps;

  beforeEach(() => {
    props = {
      addToGroceryList: jest.fn(),
      toggleConfirmedModal: jest.fn(),
    };
  });

  it("should call addToGroceryList and toggleConfirmedModal when clicking Yes", () => {
    const { getByText } = render(<ConfirmModal {...props} />);
    const yesButton = getByText("Yes");
    fireEvent.click(yesButton);
    expect(props.addToGroceryList).toHaveBeenCalled();
    expect(props.toggleConfirmedModal).toHaveBeenCalled();
  });

  it("should call toggleConfirmedModal when clicking No", () => {
    const { getByText } = render(<ConfirmModal {...props} />);
    const noButton = getByText("No");
    fireEvent.click(noButton);
    expect(props.toggleConfirmedModal).toHaveBeenCalled();
  });
});
