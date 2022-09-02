import React, { useContext } from "react";

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
      <h1>Toggle theme app</h1>
      <div
        className="content"
        style={{ backgroundColor: darkMode ? "black" : "pink" }}
      >
        <p style={{ color: darkMode ? "white" : "black" }}>
          This is a simple exercise for toggling light/dark mode with react
          Context
        </p>
      </div>
    </div>
  );
}

export default App;
