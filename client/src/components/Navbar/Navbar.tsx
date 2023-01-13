import { Icon } from "@mui/material";
import { NabvarContainer } from "./Navbar.styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [amountOfProducts, setAmountOfProducts] = useState(0);

  useEffect(() => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    setAmountOfProducts(groceryList.length);
  }, []);

  return (
    <NabvarContainer>
      <a href="/">
        <h1>BULKER</h1>
      </a>
      <div>
        <a href="/">
          <Icon>
            <FavoriteIcon />
          </Icon>
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
