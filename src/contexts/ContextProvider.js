// We can pass down data with Context API without passing data with (props)
import React, { createContext, useContext, useState } from "react";

// Create a StateContext object with empty data at first
const StateContext = createContext();

// Make sure these section are closed at initial stage
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// We export ContextProvider to pass StateContext as a data object to our React components
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(null);

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");

  const setMode = (e) => {
    setCurrentMode("e.target.value");
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (e) => {
    setCurrentColor("e.target.value");
    localStorage.setItem("colorMode", e.target.value);
  };

  const handleClick = (navItem) => {
    setIsClicked({ ...initialState, [navItem]: true });
  };

  return (
    // Every children inside ContextProvider can access the value of activeMenu from StateContext
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
      }}
    >
      {/* <StateContext.Provider value={{ activeMenu: activeMenu }}> */}
      {children}
    </StateContext.Provider>
  );
};

// We export useStateContext() to pass the data from StateContext
export const useStateContext = () => useContext(StateContext);
