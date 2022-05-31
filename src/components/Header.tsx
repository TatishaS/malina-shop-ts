import React, { FC } from "react";
import cn from "classnames";
import logo from "../assets/images/malina-logo.svg";
import cartIcon from "../assets/images/cart.svg";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart/actions";

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = React.useState(false);

  const cart = useTypedSelector((state) => state.cart);
  console.log(cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const dispatch = useDispatch();

  const handleClickRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className="flex items-center justify-between relative w-full py-1 px-3"
      style={{
        background: "#fff",
        boxShadow: "1px 3px 30px 0px rgba(50, 50, 50, 0.75)",
      }}
    >
      <img src={logo} alt="logo" width="90" />
      <button
        className="bg-transparent border-none relative"
        onClick={() => setIsShowCart(!isShowCart)}
      >
        <img src={cartIcon} alt="" width="50" />

        <div className="text-red-600 absolute bottom-0 right-1 font-bold rounded-full bg-white w-5 h-5 flex items-center justify-center">
          {cart.length}
        </div>
      </button>
      <div
        className={cn(
          "bg-white absolute right-0 shadow-md p-5 rounded-md z-10",
          {
            hidden: !isShowCart,
          }
        )}
        style={{
          top: 100,
        }}
      >
        {cart.map((item) => (
          <div
            className="flex items-center mb-2"
            key={`cart item ${item.name}`}
          >
            <img
              className="mr-3"
              src={item.imgPath}
              alt={item.name}
              width="55"
              height="55"
            />
            <div>
              <span>{item.name}</span>
              <span>{`${item.count} x $${item.price.toLocaleString()}`}</span>
              <button
                className="text-red-600 bg-transparent border-0"
                onClick={() => handleClickRemove(item._id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}

        <div className="text-lg border-solid border-t-2 border-red-100 pt-1 mt-5">
          Total: <b>${total.toLocaleString()}</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
