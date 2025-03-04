import { useEffect, useState } from "react";

function useScreenSize(targetSize: number = 768) {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(document.documentElement.clientWidth);
    };

    window.addEventListener("resize", updateScreenSize);

    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const isMobile = screenSize < 768;

  const isDesktop = screenSize >= 768;

  const moreThanTarget = screenSize >= targetSize;

  const lessThanTarget = screenSize < targetSize;

  return {
    screenSize,
    isMobile,
    isDesktop,
    moreThanTarget,
    lessThanTarget,
  };
}
export default useScreenSize;
