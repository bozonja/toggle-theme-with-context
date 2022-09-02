import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import {} from "react";

type ContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ContextType>({
  darkMode: false,
  setDarkMode: () => false,
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
