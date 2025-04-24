import { useLayoutEffect } from "react";

export default function useLockBodyScroll(locked: boolean) {
    useLayoutEffect(() => {
      if (!locked) return;
  
      const scrollY = window.scrollY;
      const original = {
        position: document.body.style.position,
        top: document.body.style.top,
        overflow: document.body.style.overflow,
        width: document.body.style.width,
      };
  
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
  
      return () => {
        document.body.style.position = original.position;
        document.body.style.top = original.top;
        document.body.style.overflow = original.overflow;
        document.body.style.width = original.width;
        window.scrollTo(0, scrollY);
      };
    }, [locked]);
  }