import { Data } from "../data";
import Card from "./Card";
import { useReducer, useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

const Skills = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isIphone, setIsIphone] = useState<boolean>(false);

  const initValue = { count: 0 };


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

  interface Action {
    type: "Increment";
  }
  const arrOfOptions = ["All", "Programming", "Design"];

  function reducer(state: typeof initValue, action: Action) {
    const { type } = action;
    switch (type) {
      case "Increment":
        return {
          ...state,
          count: state.count == arrOfOptions.length - 1 ? 0 : state.count + 1,
        };
      default:
        return state;
    }
  }

  const [sort, dispatch] = useReducer(reducer, initValue);

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
            dispatch({ type: "Increment" });
          }}
          className="sort-button"
        >
          {arrOfOptions[sort.count]} skills <FaFilter />
        </button>
      </div>
      <div className="cards-gallery">
        {Data.filter((card) => {
          return arrOfOptions[sort.count] === "Programming"
            ? card.type.includes("Programming")
            : card.type.includes("Design") ||
                (arrOfOptions[sort.count] === "All" && card);
        })
          .slice(0, isIphone ? (showMore ? Data.length : 4) : Data.length)
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
