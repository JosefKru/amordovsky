import { useEffect, useRef, useState } from "react";

export function useHeaderVisibility({ disabled = false } = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const skipNext = useRef(false);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    skipNext.current = true;

    const onScroll = () => {
      const y = window.scrollY;

      if (skipNext.current) {
        lastScrollY.current = y;
        skipNext.current = false;
        return;
      }

      setIsVisible(y < lastScrollY.current || y < 50);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [disabled]);

  return isVisible;
}
