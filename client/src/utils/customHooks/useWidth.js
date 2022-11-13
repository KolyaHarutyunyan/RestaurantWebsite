import { useCallback, useEffect, useState } from "react";

export const useWidth = () => {
  const windw = typeof window !== "undefined" ? window : {};

  const [width, setWidth] = useState(windw.innerWidth);

  const onResize = useCallback(() => {
    setWidth(windw.innerWidth);
  }, []);

  useEffect(() => {
    windw.addEventListener("resize", onResize);

    return () => {
      windw.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};
