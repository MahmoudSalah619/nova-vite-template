import { SpinnerProps } from "./types";
import styles from "./styles.module.scss";
import Icon from "../Icon";

export default function SpinnerAtom({ containerStyle, size }: SpinnerProps) {
  const sizes = {
    Small: 24,
    Medium: 64,
    Large: 112,
  };

  return (
    <div
      className={`w-100 h-100 d-flex justify-content-center align-items-center ${styles.container} ${containerStyle}`}
    >
      <Icon name="Spinner" size={sizes[size]} color="Gold" />
    </div>
  );
}
