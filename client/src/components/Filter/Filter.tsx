import { FilterContainer } from "./Filter.styles";

import { FilterType } from "../pages/Home/Home";
import React from "react";

type FilterProps = {
  currentFilter: FilterType;
  setCurrentFilter: (filter: FilterType) => void;
};

const Filter = ({ currentFilter, setCurrentFilter }: FilterProps) => {
  const allIsActive = currentFilter === "all";
  const vegiIsActive = currentFilter === "vegetarian";
  const carnIsActive = currentFilter === "carnivorous";

  return (
    <FilterContainer>
      <h1>Filter</h1>
      <div>
        <button
          className={allIsActive ? "lit-button" : "default-button"}
          onClick={() => {
            setCurrentFilter("all");
          }}
        >
          All
        </button>
        <button
          className={vegiIsActive ? "lit-button" : "default-button"}
          onClick={() => {
            setCurrentFilter("vegetarian");
          }}
        >
          Vegetarian
        </button>
        <button
          className={carnIsActive ? "lit-button" : "default-button"}
          onClick={() => {
            setCurrentFilter("carnivorous");
          }}
        >
          Carnivorous
        </button>
      </div>
    </FilterContainer>
  );
};

export default Filter;
