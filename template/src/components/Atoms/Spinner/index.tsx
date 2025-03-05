import { SpinnerProps } from "./types";
import styles from "./styles.module.scss";
import { Spin } from "antd";

export default function SpinnerAtom({
  containerStyle,
  size = "Medium",
}: SpinnerProps) {
  const sizes: { [key: string]: "small" | "default" | "large" } = {
    Small: "small",
    Medium: "default",
    Large: "large",
  };

  return (
    <div
      className={`w-100 h-100 d-flex justify-content-center align-items-center ${styles.container} ${containerStyle}`}
    >
      <Spin size={sizes[size]} />
    </div>
  );
}
