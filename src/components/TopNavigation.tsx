import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const TopNavigation = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="top-navigation">
      <button
        type="button"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Change theme
      </button>
    </div>
  );
};

export default TopNavigation;
