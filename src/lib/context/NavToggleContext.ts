import { createContext } from "react";

interface NavToggleContextProps {
  isToggled: boolean;
  toggle: () => void;
  close: () => void;
}

export const NavToggleContext = createContext<NavToggleContextProps>({
  isToggled: false,
  toggle: () => {},
  close: () => {},
});
