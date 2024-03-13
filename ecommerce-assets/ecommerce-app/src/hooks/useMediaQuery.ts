import { useEffect, useState } from "react";
import { breakpoints } from "../shared/theme";

export const useMediaQuery = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  const breakpointMobileFormat = Number(
    breakpoints.mobileWidth.replace(/\D/g, "")
  );
  const isMobile = width <= breakpointMobileFormat;

  return { isMobile };
};
