import { useState, FC } from "react";
import { NavToggleContext } from "./NavToggleContext";

type NavToggleProviderProps = {
  children: React.ReactNode;
};

export const NavToggleProvider: FC<NavToggleProviderProps> = ({ children }) => {
  const [isToggled, setNavToggled] = useState(false);

  const toggle = () => {
    setNavToggled(!isToggled);
  };

  const close = () => {
    setNavToggled(false);
  };

  return (
    <NavToggleContext.Provider value={{ isToggled, toggle, close }}>
      {children}
    </NavToggleContext.Provider>
  );
};
