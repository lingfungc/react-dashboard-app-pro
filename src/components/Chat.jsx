import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Chat = () => {
  const { currentColor, handleClickClose } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white text-xs p-1 px-2 bg-orange"
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
    </div>
  );
};

export default Chat;
