import { useContext } from "react";
import { Link } from "react-router-dom";
import { BackendDataContext } from "../../contexts/BackendDataContext";
import Card from "../Card/Card";
import { FilterType } from "../pages/Home/Home";
import { CaruselContainer } from "./Carusel.styles";

export type CaruselProps = {
  currentFilter: FilterType;
  category?: string;
};

const Carusel = ({ currentFilter, category }: CaruselProps) => {
  const backendData = useContext(BackendDataContext);

  if (category === "simple") {
    const allItems = backendData!.filter(
      (item) =>
        (item.filter.toLowerCase().includes("carnivorous") &&
          item.category.toLowerCase().includes("simple")) ||
        (item.filter.toLowerCase().includes("vegetarian") &&
          item.category.toLowerCase().includes("simple"))
    );

    const vegetarianItems = backendData!.filter(
      (item) =>
        item.filter.toLowerCase().includes("vegetarian") &&
        item.category.toLowerCase().includes("simple")
    );

    const carnivorousItems = backendData!.filter(
      (item) =>
        item.filter.toLowerCase().includes("carnivorous") &&
        item.category.toLowerCase().includes("simple")
    );

    let itemsToDisplay: typeof backendData;
    switch (currentFilter) {
      case "all":
        itemsToDisplay = allItems;
        break;
      case "vegetarian":
        itemsToDisplay = vegetarianItems;
        break;
      case "carnivorous":
        itemsToDisplay = carnivorousItems;
        break;
      default:
        itemsToDisplay = allItems;
    }

    return (
      <CaruselContainer>
        <h1>Simple to make</h1>

        <div>
          {itemsToDisplay!.map((item) => (
            <Link to={`/product/${item._id}`}>
              <Card key={item._id} img={item.img} title={item.title} />
            </Link>
          ))}
        </div>
      </CaruselContainer>
    );
  } else if (category === "bulk") {
    const allItems = backendData!.filter(
      (item) =>
        (item.filter.toLowerCase().includes("carnivorous") &&
          item.category.toLowerCase().includes("bulk")) ||
        (item.filter.toLowerCase().includes("vegetarian") &&
          item.category.toLowerCase().includes("bulk"))
    );

    const vegetarianItems = backendData!.filter(
      (item) =>
        item.filter.toLowerCase().includes("vegetarian") &&
        item.category.toLowerCase().includes("bulk")
    );

    const carnivorousItems = backendData!.filter(
      (item) =>
        item.filter.toLowerCase().includes("carnivorous") &&
        item.category.toLowerCase().includes("bulk")
    );

    let itemsToDisplay: typeof backendData;
    switch (currentFilter) {
      case "all":
        itemsToDisplay = allItems;
        break;
      case "vegetarian":
        itemsToDisplay = vegetarianItems;
        break;
      case "carnivorous":
        itemsToDisplay = carnivorousItems;
        break;
      default:
        itemsToDisplay = allItems;
    }

    return (
      <CaruselContainer>
        <h1>Make in Bulk</h1>

        <div>
          {itemsToDisplay!.map((item) => (
            <Link to={`/product/${item._id}`}>
              <Card key={item.id} img={item.img} title={item.title} />
            </Link>
          ))}
        </div>
      </CaruselContainer>
    );
  } else if (category === "budget") {
    const allItems = backendData!.filter(
      (item) =>
        (item.filter.toLowerCase().includes("carnivorous") &&
          item.category.toLowerCase().includes("budget")) ||
        (item.filter.toLowerCase().includes("vegetarian") &&
          item.category.toLowerCase().includes("budget"))
    );

    const vegetarianItems = backendData!.filter(
      (item) =>
        item.filter.toLowerCase().includes("vegetarian") &&
        item.category.toLowerCase().includes("budget")
    );

    const carnivorousItems = backendData!.filter(
      (item) =>
        item.filter.toLowerCase().includes("carnivorous") &&
        item.category.toLowerCase().includes("budget")
    );

    let itemsToDisplay: typeof backendData;
    switch (currentFilter) {
      case "all":
        itemsToDisplay = allItems;
        break;
      case "vegetarian":
        itemsToDisplay = vegetarianItems;
        break;
      case "carnivorous":
        itemsToDisplay = carnivorousItems;
        break;
      default:
        itemsToDisplay = allItems;
    }
    return (
      <CaruselContainer>
        <h1>Budget Friendly</h1>

        <div>
          {itemsToDisplay!.map((item) => (
            <Link to={`/product/${item._id}`}>
              <Card key={item.id} img={item.img} title={item.title} />
            </Link>
          ))}
        </div>
      </CaruselContainer>
    );
  } else {
    return <div>Carusel</div>;
  }
};

export default Carusel;
