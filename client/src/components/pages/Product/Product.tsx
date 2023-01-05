import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendDataContext } from "../../../App";
import { IFood } from "../../../models/IFood";

const Product = () => {
  const { id } = useParams();
  const backendData = useContext(BackendDataContext);
  const [product, setProduct] = useState<IFood | undefined>(undefined);

  useEffect(() => {
    if (backendData) {
      const product = backendData.find((item) => item.id === id);
      setProduct(product);
    }
  }, [backendData, id]);

  return (
    <div>
      {product && (
        <>
          <h1>{product.id}</h1>
        </>
      )}
    </div>
  );
};

export default Product;
