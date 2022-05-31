import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/actions";
import { ProductInterface } from "../types";
import Quantity from "./Quantity";

interface ProductItemInterface {
  product: ProductInterface;
}
const ProductItem: FC<ProductItemInterface> = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(product, count));
  };
  return (
    <div className="shadow-sm rounded-md p-5 w-4/5 mx-auto bg-white flex justify-center flex-col text-center items-center">
      <img src={product.imgPath} alt={product.name} width="200" />
      <div className="text-lg font-bold my-2">{product.name}</div>
      <div className="text-sm text-gray-600">${product.price}</div>
      <Quantity count={count} setCount={setCount} />
      <button
        className="bg-red-800 font-semibold text-white rounded-sm px-3 py-1"
        onClick={handleAddItem}
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductItem;
