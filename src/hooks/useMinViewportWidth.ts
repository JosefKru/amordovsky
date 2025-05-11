import { useEffect, useState } from "react";

export const useMinViewportWidth = (minWidth: number): boolean => {
  const [isMatch, setIsMatch] = useState(() => window.innerWidth >= minWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMatch(window.innerWidth >= minWidth);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  return isMatch;
};
