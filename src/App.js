import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  // This useStateContext() is actually useContext(StateContext)
  // We want to get value of { activeMenu } from useContext(StateContext)
  // We need to know that the value of { activeMenu } in StateContext is set by ContextProvider
  // The value of { activeMenu } in StateContext from ContextProvider is only allowed inside ContextProvider's children which is <App />
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div id="dashboard" className="flex relative dark:bg-main-dark-bg">
          <div
            id="settings-btn"
            className="fixed right-4 bottom-4"
            style={{ zIndex: "1000" }}
          >
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                // We use in-line style here because we want it to be dynamic which means user can change color scheme
                style={{ background: `${currentColor}`, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div
              id="sidebar-show"
              className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
            >
              <Sidebar />
            </div>
          ) : (
            <div id="sidebar-hide" className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            id="dashboard-content"
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            {/* <div
            className={
              activeMenu
                ? "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen md:ml-72 "
                : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
            }
          > */}
            <div
              id="navbar"
              className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
            >
              <Navbar />
            </div>

            <div>
              {/* Only show Theme Settings component when themeSettings is true */}
              {themeSettings && <ThemeSettings />}

              {/* This is to set routes for the application */}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
