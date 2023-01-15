import { useContext, useEffect, useState } from "react";
import { BackendDataContext } from "../../../contexts/BackendDataContext";
import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import SwiperInfo from "../../Info/SwiperInfo";
import NextSwipe from "../../NextSwipe/NextSwipe";
import SwiperModal from "../../ProductModal/SwiperModal";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { CompContainer, ProductContainer } from "../Product/Product.styles";
import HomeIcon from "@mui/icons-material/Home";
import { Icon } from "@mui/material";
const Swiper = () => {
  const backendData = useContext(BackendDataContext) as IFood[];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountOfProducts, setAmountOfProducts] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  const fetchGroceryList = (): {
    groceryList: IFood[];
  } => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");

    return { groceryList };
  };

  const handleNextProduct = () => {
    const { groceryList } = fetchGroceryList();

    if (groceryList.length >= backendData.length) {
      setProductIndex(0);
    } else {
      setProductIndex((productIndex + 1) % backendData.length);
    }
  };

  const handleAddAndNextProduct = () => {
    const { groceryList } = fetchGroceryList();

    groceryList.push(backendData[productIndex]);
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
    console.log(groceryList);
    if (groceryList.length >= backendData.length) {
      setProductIndex(0);
    } else {
      setProductIndex((productIndex + 1) % backendData.length);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    const foundProduct = groceryList.find(
      (product: IFood) => product._id === backendData[productIndex]._id
    );
    if (foundProduct) {
      if (groceryList.length >= backendData.length) {
        setProductIndex(0);
      } else {
        setProductIndex((productIndex + 1) % backendData.length);
      }
    } else {
      return;
    }
  }, [productIndex]);

  useEffect(() => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    setAmountOfProducts(groceryList.length);
  }, [isModalOpen, amountOfProducts, productIndex]);

  return (
    <ProductContainer>
      <a href="/">
        <Icon>
          <HomeIcon />
        </Icon>
      </a>
      <div>
        <a href="/myrecipes">
          <Icon>
            <ShoppingBagIcon />
          </Icon>
          <div>
            <p>{amountOfProducts}</p>
          </div>
        </a>
      </div>

      <img src={backendData[productIndex].img} alt={"hello"} />
      <CompContainer>
        <SwiperInfo
          product={backendData[productIndex]}
          toggleModal={toggleModal}
        />
      </CompContainer>

      <CompContainer>
        <NextSwipe
          handleNextProduct={handleNextProduct}
          handleAddAndNextProduct={handleAddAndNextProduct}
        />
      </CompContainer>
      <CompContainer>
        <Footer />
      </CompContainer>
      {isModalOpen && (
        <SwiperModal
          toggleModal={toggleModal}
          product={backendData[productIndex]}
        />
      )}
    </ProductContainer>
  );
};

export default Swiper;
