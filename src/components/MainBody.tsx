import { useTheme } from "./Context";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import coding from "../assets/coding.json";

const MainBody = () => {
  const { theme } = useTheme();
  return (
    <div className="main-body" id="home">
      <motion.div
        className="paragraph-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
      >
        <h3 className="paragraph" id={`${theme ? "white" : "dark"}`}>
          <span className="span-logo">
            Nu<span className="num-sev">7</span>as Tech
          </span>{" "}
          is a leading company in web design and development, specializing in
          delivering innovative and customized digital solutions tailored to
          client needs.
          <h4
            style={{ opacity: 0.8 }}
            id={`${theme ? "white" : "dark"}`}
            className="paragraph-sub"
          >
            Video Editors | Web Developers
          </h4>
        </h3>
      </motion.div>
      <div
        className="image-container"
        style={{ display: "flex", justifyContent: "center"}}
      >
        <Player
          autoplay
          src={coding}
          loop
          style={{ height: "400px", width: "400px" }} // Increase the size here
        />
      </div>
    </div>
  );
};

export default MainBody;
