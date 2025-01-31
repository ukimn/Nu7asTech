import { useCallback } from "react";
import { useShow } from "../customHooks/useShow";

interface CardProps {
  imgUrl: string;
  name: string;
}

const Card = ({ imgUrl, name }: CardProps) => {
  const { showTitle, setShowTitle } = useShow();

  const handlePointerOver = useCallback(
    () => setShowTitle(true),
    [setShowTitle]
  );
  const handlePointerOut = useCallback(
    () => setShowTitle(false),
    [setShowTitle]
  );

  return (
    <div
      className="card"
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <img src={imgUrl} alt="card" height="150" width="150" />
      <h1
        style={{ visibility: showTitle ? "visible" : "hidden", color: "black" }}
        aria-hidden={!showTitle}
      >
        {name}
      </h1>
    </div>
  );
};

export default Card;
