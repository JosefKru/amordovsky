import { useLayoutEffect } from "react";

export default function useLockBodyScroll(locked: boolean) {
  useLayoutEffect(() => {
    if (!locked) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = document.documentElement.style.overflow;
    const originalPadding = document.body.style.paddingRight;

    document.documentElement.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.documentElement.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    };
  }, [locked]);
}
