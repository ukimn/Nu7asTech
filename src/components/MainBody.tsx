import img from "../assets/darkMode.webp";
import lightMode from '../assets/lightMode.webp'
import { useTheme } from "./Context";


const MainBody = () => {
  const {theme} = useTheme();
  return (
    <div className="main-body" id="home">
      <div className="paragraph-container">
        <h3 className="paragraph" id={`${theme ? "white" : "dark"}`}>
          <span className="span-logo">Nu<span className="num-sev">7</span>as Tech</span> is a leading company in
          web design and development, specializing in delivering innovative and
          customized digital solutions tailored to client needs.
        </h3>
      </div>
      <div className="image-container">
        <img
          src={theme ? lightMode : img}
          alt="a programming image"
          height={"400px"}
          width={"400px"}
          className="img"
        />
      </div>
    </div>
  );
};

export default MainBody;
