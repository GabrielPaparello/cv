import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "../../App.css";
import { nav } from "../nav/navData";
import { NavToggleContext } from "../../lib/context/NavToggleContext";
import favicon from "@assets/logo/favicon.png";
import { Link } from "react-scroll";
export function Mobile() {
  const { isToggled, toggle, close } = useContext(NavToggleContext);

  const handleMouseLeave = () => {
    if (isToggled) {
      close();
    }
  };
  return (
    <>
      {!isToggled && (
        <FontAwesomeIcon
          onClick={toggle}
          className="text-white fixed p-2 top-0 left-0 z-10  cursor-pointer"
          size="xl"
          icon={faBars}
        />
      )}

      <nav
        onMouseLeave={handleMouseLeave}
        className={`fixed z-10 duration-300 top-0 ${
          isToggled ? "left-0" : "-left-[200px]"
        }`}
      >
        <ul className="bg-slate-800/80 p-8 h-screen ease-in-out flex flex-col items-center justify-evenly">
          <img className="h-auto w-16" src={favicon} alt="logo" />

          <FontAwesomeIcon
            onClick={toggle}
            className="text-white absolute top-6 right-6 cursor-pointer"
            size="2xl"
            icon={faClose}
          />
          {nav.map((link) => (
            <li
              className="text-white  cursor-pointer hover:text-amber-500/50 text-decoration-none"
              key={link.name}
            >
              <FontAwesomeIcon className="text-white mr-2" icon={link.icon} />
              <Link duration={500} smooth to={link.to}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
