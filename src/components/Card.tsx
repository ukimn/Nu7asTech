import { useCallback, memo } from "react";
import { useShow } from "../customHooks/useShow";

interface CardProps {
  imgUrl: string;
  name: string;
}

const Card = ({ imgUrl, name }: CardProps) => {
  const { showTitle, setShowTitle } = useShow();

  // Memoized event handlers to prevent unnecessary re-renders
  const handlePointerOver = useCallback(() => setShowTitle(true), [setShowTitle]);
  const handlePointerOut = useCallback(() => setShowTitle(false), [setShowTitle]);

  return (
    <div className="card" onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      {/* Optimized image handling for LCP */}
      <img
        src={imgUrl}
        alt="card"
        height="150"
        width="150"
        loading="lazy"
      />
      <h1
        style={{ visibility: showTitle ? "visible" : "hidden", color: "black" }}
        aria-hidden={!showTitle} // Improves accessibility
      >
        {name}
      </h1>
    </div>
  );
};

// Prevents unnecessary re-renders if props don't change
export default memo(Card);
