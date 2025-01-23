import { Data } from "../data";
import Card from "./Card";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Skills = () => {
  const [sort, setSort] = useState<number>(0);

  const arrOfOptions = ["All", "Programming", "Design"];

  const handleClick = () => {
    setSort((prev) => (prev == arrOfOptions.length - 1 ? 0 : prev + 1));
  };

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
        <button onClick={handleClick} className="sort-button">
        {arrOfOptions[sort]} skills <FaFilter />
        </button>
      </div>
      <div className="cards-gallery">
        {Data.filter((card) => {
          return arrOfOptions[sort] === "Programming"
            ? card.type.includes("Programming")
            : card.type.includes("Design") ||
                (arrOfOptions[sort] === "All" && card);
        }).map((card) => {
          return (
            <div key={card.id}>
              <Card imgUrl={card.imgPath} name={card.name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
