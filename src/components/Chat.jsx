import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Chat = () => {
  const { currentColor, handleClickClose } = useStateContext();

  return (
    <div
      id="chat"
      className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-xs text-gray-600 dark:text-gray-400 p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>

        <button
          type="button"
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          onClick={() => handleClickClose("chat")}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="mt-5">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: currentColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 top-1"
              />
            </div>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <button
            type="button"
            style={{
              backgroundColor: currentColor,
              color: "white",
              borderRadius: "10px",
            }}
            className="p-3 hover:drop-shadow-xl hover:bg-light-gray w-full"
            onClick={() => handleClickClose("chat")}
          >
            See all messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
