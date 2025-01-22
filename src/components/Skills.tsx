import {Data} from "../data";
import Card from "./Card";
const Skills = () => {
  return (
    <>
      <div className="main-gallery-container" id="skills">
        <div className="heading-container">
          <h1 className="heading">Skills</h1>
        </div>
      </div>
      <div className="cards-gallery">
        {Data.map((card) => {
          return (
            <div key={card.id}>
              <Card imgUrl={card.imgPath} name={card.name}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
