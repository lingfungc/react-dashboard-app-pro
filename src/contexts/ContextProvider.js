import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// Make sure these section are closed at initial stage
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    // We can pass down data with Context API without passing data with (props)
    <StateContext.Provider value={{ activeMenu }}>
      {/* <StateContext.Provider value={{ activeMenu: activeMenu }}> */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
