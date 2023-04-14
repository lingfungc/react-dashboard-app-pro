import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const {
    currentColor,
    handleClick,
    handleClickClose,
    isClicked,
    setIsClicked,
  } = useStateContext();

  return (
    <div
      id="shopping-cart"
      className="bg-half-transparent w-full fixed nav-item top-0 right-0"
    >
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484852] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => handleClickClose("chat")}
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Items List */}
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img
                  className="rounded-lg h-80 w-24 my-4"
                  src={item.image}
                  alt=""
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-color rounded">
                      <p className="p-2 border-color dark:border-gray-600 text-red-600">
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-l-1 border-r-1 border-color dark:border-gray-600 text-green-600">
                        0
                      </p>
                      <p className="p-2 border-color dark:border-gray-600 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-5 mb-5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="button"
            style={{
              backgroundColor: currentColor,
              color: "white",
              borderRadius: "10px",
            }}
            className={`p-3 hover:drop-shadow-xl hover:bg-light-gray w-full`}
            onClick={() => handleClickClose("chat")}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
