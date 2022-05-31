import React, { FC } from "react";
import cn from "classnames";
import logo from "../assets/images/malina-logo.svg";
import cartIcon from "../assets/images/cart.svg";
import { CartItemInterface } from "../types";

const cartItems: CartItemInterface[] = [
  {
    _id: "1klo752n",
    name: "SHISEIDO POWDER GEL EYESHADOW",
    imgPath:
      "https://api.rivegauche.ru/medias6/730852177116.jpg?context=bWFzdGVyfGltYWdlc3w2MjMyMzN8aW1hZ2UvanBlZ3xoMTIvaGI0LzEwODAzMzE3Mjc2NzAyLzczMDg1MjE3NzExNi5qcGd8ODJjYTJlNzUyMTc0NTkyYjAzNjJlZjczMmI1MzA0YTQ1OWZhOWU3MDkwZTAxMTY2ODc3MTlmNzVkNjY0MzY2Mw",
    price: 40,
    quantity: 1,
  },
];

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = React.useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

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

        <div className="text-red-600 absolute bottom-0 right-1 font-bold rounded-full bg-white w-5 h-5 flex items-center text-center">
          {cartItems.length}
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
          top: 60,
        }}
      >
        {cartItems.map((item) => (
          <div className="flex items-center" key={`cart item ${item.name}`}>
            <img
              className="mr-3"
              src={item.imgPath}
              alt={item.name}
              width="55"
              height="55"
            />
            <div>
              <span>{item.name}</span>
              <span>{`${
                item.quantity
              } x $${item.price.toLocaleString()}`}</span>
              <button className="text-red-600 bg-transparent border-0">
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
