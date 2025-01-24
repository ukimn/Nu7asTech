import { Data } from "../data";
import Card from "./Card";
import { useReducer } from "react";
import { FaFilter } from "react-icons/fa";

const Skills = () => {
  const initValue = { count: 0 };

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
        <button onClick={()=>{dispatch({type: "Increment"})}} className="sort-button">
          {arrOfOptions[sort.count]} skills <FaFilter />
        </button>
      </div>
      <div className="cards-gallery">
        {Data.filter((card) => {
          return arrOfOptions[sort.count] === "Programming"
            ? card.type.includes("Programming")
            : card.type.includes("Design") ||
                (arrOfOptions[sort.count] === "All" && card);
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
