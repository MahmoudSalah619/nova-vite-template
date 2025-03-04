import { useEffect, useState } from "react";
import { Property } from "csstype";

export default function Image({
  width,
  height,
  alt,
  src,
  borderRadius,
  className,
  objectFit,
}: {
  width: number;
  height: number;
  alt: string;
  src: string | undefined;
  borderRadius?: string;
  className?: string;
  objectFit?: Property.ObjectFit;
}) {
  const [newWidth, setNewWidth] = useState<string>(`${width}px`);
  const [newheight, setNewheight] = useState<string>(`${height}px`);

  useEffect(() => {
    const updateDimensions = () => {
      const ratio =
        document.documentElement.clientWidth >= 768
          ? document.documentElement.clientWidth / 1920
          : document.documentElement.clientWidth / 768;
      setNewheight(`${height * ratio}px`);
      setNewWidth(`${width * ratio}px`);
    };

    updateDimensions();

    if (document) {
      // Set up the event listener for resize
      window.addEventListener("resize", updateDimensions);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [width, height]);
  return (
    <img
      className={className}
      alt={alt}
      src={src}
      style={{
        objectFit,
        borderRadius,
        height: newheight,
        width: newWidth,
        maxWidth: "100%",
      }}
    />
  );
}
