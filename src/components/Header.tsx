import { useTheme } from "./Context";
const Header = () => {
  const {theme, setTheme} = useTheme();
  return (
    <header style={{backgroundColor: theme ? "#FFFAE8" : "#191919"}}>
      <nav className="navbar">
        <h1 className="logo">n.w.b</h1>
        <ul className="words-navbar">
          <li className="items"><a href="#home" className="items" style={{color: theme ? "black" : "#fff"}}>Home</a></li>
          <li className="items"><a href="#skills" className="items" style={{color: theme ? "black" : "#fff"}}>Info</a></li>
          <li className="items"><a href="#contact" className="items" style={{color: theme ? "black" : "#fff"}}>Contact Us</a></li>
        </ul>
        <div className="button-container">
          <button
            className="button"
            onClick={() => {
              setTheme((prev) => !prev);
            }}
            style={{background: theme ? "black" : "#fff", color: theme ? "#fff" : "black"}}
          >
            {theme ? "Dark Mode" : "Light Mode"}
          </button>
          <a className="button start" href="#contact">Start</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
