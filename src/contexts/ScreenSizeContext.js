import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const sm = useMediaQuery({ query: "(max-width: 640px)" });
  const md = useMediaQuery({ query: "(max-width: 768px)" });
  const lg = useMediaQuery({ query: "(max-width: 1024px)" });

  const value = { sm, md, lg };

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

export { ScreenSizeProvider, useScreenSize };
