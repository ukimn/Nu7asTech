import { Data } from "../data";
import Card from "./Card";
import { useState, useEffect, useMemo, useCallback } from "react";
import { FaFilter } from "react-icons/fa";

const Skills = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isIphone, setIsIphone] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => setIsIphone(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Set initial value
    setIsIphone(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const arrOfOptions = useMemo(() => ["All", "Programming", "Design"], []);

  const [sort, setSort] = useState<number>(0);

  const filteredData = useMemo(() => {
    return Data.filter((card) => {
      if (arrOfOptions[sort] === "Programming")
        return card.type.includes("Programming");
      if (arrOfOptions[sort] === "Design") return card.type.includes("Design");
      return true; // "All" case
    });
  }, [sort, arrOfOptions]);

  const toggleSort = useCallback(() => {
    setSort((prev) => (prev === 2 ? 0 : prev + 1));
  }, []);

  const toggleShowMore = useCallback(() => {
    setShowMore((prev) => !prev);
  }, []);

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
        <button onClick={toggleSort} className="sort-button">
          {arrOfOptions[sort]} skills <FaFilter />
        </button>
      </div>
      <div className="cards-gallery">
        {filteredData
          .slice(0, isIphone ? (showMore ? Data.length : 3) : Data.length)
          .map((card) => {
            return (
              <div key={card.id}>
                <Card imgUrl={card.imgPath} name={card.name} />
              </div>
            );
          })}
      </div>
      <button
        className="show-more"
        onClick={toggleShowMore}
        style={{ visibility: isIphone ? "visible" : "hidden" }}
      >
        Show {showMore ? "less" : "more"}
      </button>
    </>
  );
};

export default Skills;
