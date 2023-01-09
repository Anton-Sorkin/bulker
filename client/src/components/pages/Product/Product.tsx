import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendDataContext } from "../../../App";
import { IFood } from "../../../models/IFood";
import Footer from "../../Footer/Footer";
import {
  AddToCardWrapper,
  CompContainer,
  InfoWrapper,
  ModalContainer,
  ProductContainer,
} from "./Product.styles";

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

  useEffect(() => {
    const groceryList = JSON.parse(localStorage.getItem("groceryList") || "[]");
    const foundProduct = groceryList.find(
      (product: IFood) => product._id === id
    );
    if (foundProduct) {
      setIsSetToGroceryList(true);
    } else {
      setIsSetToGroceryList(false);
    }
  }, [id]);

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
      <a href="/">$</a>
      <div>
        <a href="/">
          %
          <div>
            <p>{amountOfProducts}</p>
          </div>
        </a>
      </div>

      <img src={product?.img} alt={product?.title} />
      <CompContainer>
        <InfoWrapper>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <button onClick={toggleModal}>See Recipe</button>
        </InfoWrapper>
      </CompContainer>
      <CompContainer>
        <AddToCardWrapper>
          {isSetToGroceryList === false && (
            <button onClick={addToGroceryList}>Add to Grocery List</button>
          )}

          {isSetToGroceryList === true && (
            <>
              <button onClick={toggleConfirmedModal}>
                Add Another Grocery List
              </button>
              <p>it has now been added to your cart!</p>
            </>
          )}
          {/* create button that adds product to an array of products in local
          storage */}
        </AddToCardWrapper>
      </CompContainer>
      <CompContainer>
        <Footer />
      </CompContainer>
      {isModalOpen && (
        <ModalContainer>
          <div>
            <h1>{product?.title}</h1>
            <h2>Ingredients</h2>
            <li>
              {product?.ingredients.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </li>
            <button onClick={toggleModal}>Close</button>
          </div>
        </ModalContainer>
      )}

      {isConfirmedModalOpen === true && (
        <ModalContainer>
          <div>
            <h2>Are you sure you want to add</h2>
            <h1>{product?.title}</h1>
            <button
              onClick={() => {
                addToGroceryList();
                toggleConfirmedModal();
              }}
            >
              Yes
            </button>

            <button onClick={toggleConfirmedModal}>No</button>
          </div>
        </ModalContainer>
      )}
    </ProductContainer>
  );
};

export default Product;
