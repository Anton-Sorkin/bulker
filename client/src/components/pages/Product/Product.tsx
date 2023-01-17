import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IFood } from "../../../models/IFood";
import AddToCart from "../../AddToCart/AddToCart";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import Footer from "../../Footer/Footer";
import ProductInfo from "../../Info/ProductInfo";
import ProductModal from "../../ProductModal/ProductModal";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Icon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { CompContainer, ProductContainer } from "./Product.styles";
import SimilarProducts from "../../SimilarProducts/SimilarProducts";
import { BackendDataContext } from "../../../contexts/BackendDataContext";
import Navbar from "../../Navbar/Navbar";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const backendData = useContext(BackendDataContext);
  const [product, setProduct] = useState<IFood>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmedModalOpen, setIsConfirmedModalOpen] = useState(false);
  const [isSetToGroceryList, setIsSetToGroceryList] = useState(false);
  const [amountOfProducts, setAmountOfProducts] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleConfirmedModal = () => {
    setIsConfirmedModalOpen(!isConfirmedModalOpen);
  };

  const toggleGroceryList = () => {
    setIsSetToGroceryList(true);
  };

  const fetchGroceryListSingle = (
    id: string
  ): { groceryList: IFood[]; foundProduct: IFood | undefined } => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    const foundProduct = groceryList.find(
      (product: IFood) => product._id === id
    );
    return { groceryList, foundProduct };
  };

  useCallback(
    (id: string) => {
      const { foundProduct } = fetchGroceryListSingle(id);

      if (foundProduct) {
        setIsSetToGroceryList(true);
      } else {
        setIsSetToGroceryList(false);
      }
    },
    [id]
  );

  useEffect(() => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");

    setAmountOfProducts(groceryList.length);
  }, [isSetToGroceryList, isConfirmedModalOpen, isModalOpen, amountOfProducts]);

  const addToGroceryList = () => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    groceryList.push(product);
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
    console.log(groceryList);
    toggleGroceryList();
  };

  useEffect(() => {
    const foundProduct = backendData?.find((product) => product._id === id);
    setProduct(foundProduct);
  }, [backendData, id]);

  return (
    <ProductContainer>
      <a href="/">
        <Icon>
          <HomeIcon />
        </Icon>
      </a>
      <div>
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

      <img src={product?.img} alt={product?.title} />
      <CompContainer>
        <ProductInfo toggleModal={toggleModal} product={product!} />
      </CompContainer>
      <CompContainer>
        <AddToCart
          isSetToGroceryList={isSetToGroceryList}
          addToGroceryList={addToGroceryList}
          toggleConfirmedModal={toggleConfirmedModal}
        />
      </CompContainer>
      <CompContainer>
        <SimilarProducts
          productId={id}
          backendData={backendData}
          category={product?.category}
        />
      </CompContainer>
      <CompContainer>
        <Footer />
      </CompContainer>
      {isModalOpen && (
        <ProductModal toggleModal={toggleModal} product={product} />
      )}

      {isConfirmedModalOpen === true && (
        <ConfirmModal
          product={product}
          addToGroceryList={addToGroceryList}
          toggleConfirmedModal={toggleConfirmedModal}
        />
      )}
    </ProductContainer>
  );
};

export default Product;
