import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const TopNavigation = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      Change theme
    </button>
  );
};

export default TopNavigation;
