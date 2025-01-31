import { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../Store/store";

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dispatch = useDispatch();
  const theme = useSelector((state: {theme: boolean}) => state.theme);
  return (
    <>
      <header id={`${theme ? "white" : "dark"}`}>
        <nav className="navbar">
          <motion.h1 className="logo">n.w.b</motion.h1>
          <ul
            className={`words-navbar ${isOpened ? "open" : ""}`}
            id={`${theme ? "white" : "dark"}`}
          >
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
              onClick={() => dispatch(toggleTheme())}
              id={`${theme ? "dark" : "white"}`}
              name="theme"
              aria-label={
                theme ? "Switch to light mode" : "Switch to dark mode"
              } // ✅ Accessibility fix
            >
              {theme ? <IoIosMoon size={30} /> : <IoSunnyOutline size={30} />}
            </button>
            <motion.a
              className="button start"
              href="#contact"
              transition={{ type: "spring", stiffness: 500 }}
              whileHover={{ scale: 1.3, backgroundColor: "#D4A400" }} // Darker yellow on hover
            >
              Start
            </motion.a>
          </div>
          <div
            className={`ham ${isOpened ? "open" : ""}`}
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <Hamburger isOpened={isOpened} />
          </div>
        </nav>
      </header>
    </>
  );
};

interface HamburgerProps {
  isOpened: boolean;
}

function Hamburger({ isOpened }: HamburgerProps) {
  const theme = useSelector((state: { theme: boolean }) => state.theme);
  return (
    <div className={`hamburger ${isOpened ? "open" : ""}`}>
      <div className="line" id={`${theme ? "dark" : "white"}`}></div>
      <div className="line" id={`${theme ? "dark" : "white"}`}></div>
      <div className="line" id={`${theme ? "dark" : "white"}`}></div>
    </div>
  );
}

export default Header;
