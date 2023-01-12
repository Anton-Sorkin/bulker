import { useContext, useEffect, useState } from "react";
import { BackendDataContext } from "../../../App";
import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import SwiperInfo from "../../Info/SwiperInfo";
import SwiperModal from "../../ProductModal/SwiperModal";
import { CompContainer, ProductContainer } from "../Product/Product.styles";
import { NextSwipeWrapper } from "./Swiper.styles";

const Swiper = () => {
  const backendData = useContext(BackendDataContext) as IFood[];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountOfProducts, setAmountOfProducts] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  const handleNextProduct = () => {
    setProductIndex((productIndex + 1) % backendData.length);
  };

  const handleAddAndNextProduct = () => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    groceryList.push(backendData[productIndex]);
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
    console.log(groceryList);
    setProductIndex((productIndex + 1) % backendData.length);
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
      setProductIndex((productIndex + 1) % backendData.length);
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
      <a href="/">$</a>
      <div>
        <a href="/myrecipes">
          %
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
        <NextSwipeWrapper>
          <div>
            <button onClick={handleNextProduct}>Next product</button>
          </div>
          <button onClick={handleAddAndNextProduct}>
            Add it and next product
          </button>
        </NextSwipeWrapper>
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
