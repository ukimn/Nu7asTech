import { useTheme } from "./Context";
import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <header id={`${theme ? "white" : "dark"}`}>
      <nav className="navbar">
        <h1 className="logo">n.w.b</h1>
        <ul className={`words-navbar ${isOpened ? "open" : ""}`} id={`${theme ? "white" : "dark"}`}>
          <li className="items">
            <a
              href="#home"
              className="items"
              id={`${theme ? "light-mode-color" : "dark-mode-color"}`}
            >
              Home
            </a>
          </li>
          <li className="items">
            <a
              href="#skills"
              className="items"
              id={`${theme ? "light-mode-color" : "dark-mode-color"}`}
            >
              Info
            </a>
          </li>
          <li className="items">
            <a
              href="#contact"
              className="items"
              id={`${theme ? "light-mode-color" : "dark-mode-color"}`}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="button-container">
          <button
            className="button-mode"
            onClick={() => {
              setTheme((prev) => !prev);
            }}
            id={`${theme ? "dark" : "white"}`}
          >
            {theme ? <IoIosMoon size={30}/> : <IoSunnyOutline size={30}/>}
          </button>
          <a className="button start" href="#contact">
            Start
          </a>
        </div>
        <div
          className={`ham ${isOpened ? "open" : ""}`}
          onClick={() => {
            setIsOpened((prev) => !prev);
          }}
        >
          <Hamburger isOpened={isOpened} />
        </div>
      </nav>
    </header>
  );
};

interface HamburgerProps {
  isOpened: boolean;
}

function Hamburger({ isOpened }: HamburgerProps) {
  const {theme} = useTheme();
  return (
    <>
      <div className={`hamburger ${isOpened ? "open" : ""}`}>
        <div className="line" id={`${theme ? "dark" : "white"}`}></div>
        <div className="line" id={`${theme ? "dark" : "white"}`}></div>
        <div className="line" id={`${theme ? "dark" : "white"}`}></div>
      </div>
    </>
  );
}

export default Header;
