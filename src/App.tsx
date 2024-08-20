import { Portfolio } from "./portfolio";
import { useState } from "react";

export const App = () => {
  // THIS WAS MY FIX TO MAKE THE NAV CLOSE
  // CLICKING ON THE BACKGROUND
  const [handleNav, setHandleNav] = useState(false);

  return (
    <>
      <Portfolio setHandleNav={setHandleNav} handleNav={handleNav} />
    </>
  );
};
