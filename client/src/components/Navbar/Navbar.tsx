import { Icon } from "@mui/material";
import { NabvarContainer } from "./Navbar.styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [amountOfProducts, setAmountOfProducts] = useState(0);
  const [amountOfHearted, setAmountOfHearted] = useState(0);

  useEffect(() => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    setAmountOfProducts(groceryList.length);
  }, [localStorage.getItem("groceryList")]);

  useEffect(() => {
    const hearted = JSON.parse(localStorage.getItem("hearted") || "[]");
    setAmountOfHearted(hearted.length);
  }, [localStorage.getItem("hearted")]);

  return (
    <NabvarContainer>
      <a href="/">
        <h1>BULKER</h1>
      </a>
      <div>
        <a href="/hearted">
          <Icon>
            <FavoriteIcon />
          </Icon>
          <div>
            <p>{amountOfHearted}</p>
          </div>
        </a>
        <a
          href="
        /myrecipes
        "
        >
          <Icon>
            <ShoppingBagIcon />
          </Icon>
          <div>
            <p>{amountOfProducts}</p>
          </div>
        </a>
      </div>
    </NabvarContainer>
  );
};

export default Navbar;
