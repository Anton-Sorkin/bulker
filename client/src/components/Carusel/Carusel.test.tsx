import React, { useContext } from "react";
import { render } from "@testing-library/react";
import Carusel, { CaruselProps } from "./Carusel";
import { IFood } from "../../models/IFood";
import { BackendDataContext } from "../../contexts/BackendDataContext";

describe("Carusel component", () => {
  test('should render correct items when category is "simple"', () => {
    jest.spyOn(React, "useContext").mockImplementation((context) => {
      if (context === BackendDataContext) {
        return mockBackendDataContext;
      }
      return originalUseContext(context);
    });

    const mockBackendData: IFood[] = [
      {
        filter: "carnivorous",
        category: "simple",
        _id: "1",
        img: "image1.jpg",
        title: "example title 1",
        id: "1",
        description: "test",
        ingredients: [],
      },
      {
        filter: "vegetarian",
        category: "simple",
        _id: "2",
        img: "image2.jpg",
        title: "example title 2",
        id: "2",
        description: "test",
        ingredients: [],
      },
      {
        filter: "vegetarian",
        category: "simple",
        _id: "3",
        img: "image3.jpg",
        title: "example title 3",
        id: "3",
        description: "test",
        ingredients: [],
      },
    ];

    const mockBackendDataContext = {
      backendData: mockBackendData,
      setBackendData: jest.fn(),
    };

    const mockCaruselProps: CaruselProps = {
      currentFilter: "all",
    };

    render(<Carusel {...mockCaruselProps} />);
  });
});
function originalUseContext(context: React.Context<unknown>): unknown {
  throw new Error("Function not implemented.");
}
