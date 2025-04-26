import { useState } from "react";

export default function useFadeAnimation(fadeDuration = 800) {
  const [isFading, setIsFading] = useState(false);

  const startFade = (callback?: () => void) => {
    setIsFading(true);
    setTimeout(() => {
      callback?.();
      setIsFading(false);
    }, fadeDuration);
  };

  return { isFading, startFade };
}
