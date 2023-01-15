import { render, fireEvent } from "@testing-library/react";
import Filter, { FilterProps } from "./Filter";

describe("Filter", () => {
  let props: FilterProps;

  beforeEach(() => {
    props = {
      currentFilter: "all",
      setCurrentFilter: jest.fn(),
    };
  });

  it("should render the filter buttons", () => {
    const { getByText } = render(<Filter {...props} />);
    expect(getByText("All")).toBeInTheDocument();
    expect(getByText("Vegetarian")).toBeInTheDocument();
    expect(getByText("Carnivorous")).toBeInTheDocument();
  });

  it('should call setCurrentFilter with "all" when clicking the All button', () => {
    const { getByText } = render(<Filter {...props} />);
    const allButton = getByText("All");
    fireEvent.click(allButton);
    expect(props.setCurrentFilter).toHaveBeenCalledWith("all");
  });

  it('should call setCurrentFilter with "vegetarian" when clicking the Vegetarian button', () => {
    const { getByText } = render(<Filter {...props} />);
    const vegiButton = getByText("Vegetarian");
    fireEvent.click(vegiButton);
    expect(props.setCurrentFilter).toHaveBeenCalledWith("vegetarian");
  });

  it('should call setCurrentFilter with "carnivorous" when clicking the Carnivorous button', () => {
    const { getByText } = render(<Filter {...props} />);
    const carnButton = getByText("Carnivorous");
    fireEvent.click(carnButton);
    expect(props.setCurrentFilter).toHaveBeenCalledWith("carnivorous");
  });
});
