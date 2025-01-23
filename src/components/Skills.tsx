import { Data } from "../data";
import Card from "./Card";
import { useState } from "react";
const Skills = () => {
  const [search, setSearch] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
        <input type="text" value={search} onChange={handleInput} placeholder="search for a skill"/>
      </div>
      <div className="cards-gallery">
        {Data.filter((card) => {
          return search.toLowerCase() === ""
            ? card
            : card.name.toLowerCase().includes(search);
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
