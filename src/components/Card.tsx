import { useShow } from "../customHooks/useShow";

interface CardProps{
  imgUrl: string;
  name: string;
}

const Card = ({imgUrl, name}: CardProps) => {
  const {showTitle, setShowTitle} = useShow();
  return (
    <div className="card" onPointerOver={()=>{setShowTitle(true)}} onPointerOut={()=>{setShowTitle(false)}}>
      <img src={imgUrl} alt="card" height={"150px"} width={"150px"} loading="lazy"/>
      <h1 style={{visibility: showTitle ? "visible" : "hidden", color: "black"}}>{name}</h1>
    </div>
  )
}

export default Card;
