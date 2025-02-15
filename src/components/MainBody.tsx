import img from "../assets/darkMode.webp";
import lightMode from "../assets/lightMode.webp";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

const MainBody = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <div className="main-body" id="home">
      <div className="paragraph-container">
        <p>You{"'"}re using an old version of our website!</p>
        <p>go to new <a href="https://nu7as-tech.vercel.app">version</a></p>
        <p
          className="paragraph"
          id={`${theme ? "light-mode-color" : "dark-mode-color"}`}
        >
          <span className="span-logo">
            Nu<span className="num-sev">7</span>as Tech
          </span>{" "}
          is a leading company in web design and development, specializing in
          delivering innovative and customized digital solutions tailored to
          client needs.
        </p>
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
