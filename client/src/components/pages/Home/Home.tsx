import Carusel from "../../Carusel/Carusel";
import Filter from "../../Filter/Filter";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

import { useState } from "react";

import {
  CompContainer,
  HeroSectionImage,
  HeroSectionTitle,
  SwiperLinkContainer,
} from "./Home.styles";

export type FilterType = "all" | "vegetarian" | "carnivorous";

const Home = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");

  const handleFilterChange = (filter: FilterType) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      {/* Navbar  */}
      <CompContainer>
        <Navbar />
      </CompContainer>

      {/* Hero Image  */}
      <CompContainer>
        <HeroSectionImage></HeroSectionImage>
      </CompContainer>

      {/* Hero Text bubble  */}
      <CompContainer>
        <HeroSectionTitle>
          <h1>BULK up for the week</h1>
          <p>Tired of the same old recipes? We do something about it</p>
        </HeroSectionTitle>
      </CompContainer>

      {/* Swiper Link  */}
      <CompContainer>
        <SwiperLinkContainer>
          <h1>Find Your Favorites</h1>
          <p>A new take on finding new Food. Swipe it!</p>
          <Link to={`/swiper`}>
            <button>Swipe them now!</button>
          </Link>
        </SwiperLinkContainer>
      </CompContainer>

      {/* Filter  */}
      <CompContainer>
        <Filter
          currentFilter={currentFilter}
          setCurrentFilter={handleFilterChange}
        />
      </CompContainer>

      {/* Carusels  */}
      <CompContainer>
        <Carusel currentFilter={currentFilter} category="simple" />
      </CompContainer>

      <CompContainer>
        <Carusel currentFilter={currentFilter} category="bulk" />
      </CompContainer>

      <CompContainer>
        <Carusel currentFilter={currentFilter} category="budget" />
      </CompContainer>

      {/* Footer  */}
      <CompContainer>
        <Footer />
      </CompContainer>
    </>
  );
};

export default Home;
