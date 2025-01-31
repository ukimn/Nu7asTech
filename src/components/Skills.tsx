import { Data } from "../data";
import Card from "./Card";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

const Skills = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isIphone, setIsIphone] = useState<boolean>(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Define phone breakpoint
    const handleResize = () => setIsIphone(mediaQuery.matches);

    // Set initial value
    handleResize();

    // Add listener for resize
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup on unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const arrOfOptions = ["All", "Programming", "Design"];

  const [sort, setSort] = useState<number>(0)

  return (
    <>
      <div
        className="main-gallery-container"
        id="skills"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="heading-container">
          <h1 className="heading">Skills</h1>
        </div>
        <button
          onClick={() => {
            setSort((prev)=> prev === 2 ? 0 : prev + 1);
          }}
          className="sort-button"
        >
          {arrOfOptions[sort]} skills <FaFilter />
        </button>
      </div>
      <div className="cards-gallery">
        {Data.filter((card) => {
          return arrOfOptions[sort] === "Programming"
            ? card.type.includes("Programming")
            : card.type.includes("Design") ||
                (arrOfOptions[sort] === "All" && card);
        })
          .slice(0, isIphone ? (showMore ? Data.length : 3) : Data.length)
          .map((card) => {
            return (
              <div key={card.id}>
                <Card imgUrl={card.imgPath} name={card.name} />
              </div>
            );
          })}
      </div>
      <a
        className="show-more"
        onClick={() => {
          setShowMore((prev) => !prev);
        }}
        style={{visibility: isIphone ? "visible" : "hidden"}}
      >
        Show {showMore ? "less" : "more"}
      </a>
    </>
  );
};

export default Skills;
