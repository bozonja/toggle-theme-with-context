import { useContext } from "react";
import { useState } from "react";

import "./App.css";
//comps
import TopNavigation from "./components/TopNavigation.jsx";
//context
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="App">
      <TopNavigation />
      <div
        className="content"
        style={{ backgroundColor: darkMode ? "black" : "pink" }}
      ></div>
    </div>
  );
}

export default App;
