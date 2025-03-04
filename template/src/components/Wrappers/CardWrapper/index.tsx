import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { CardWrapperProps } from "./types";

function CardWrapper({
  children,
  title,
  className,
  noHorizontalPadding,
}: CardWrapperProps) {
  return (
    <section
      className={`${styles.cardWrapper} ${
        noHorizontalPadding && styles.noPadding
      } ${className}`}
    >
      {!!title && (
        <Text fontFamily="font500" fontSize={22} color="grey900">
          {title}
        </Text>
      )}
      {children}
    </section>
  );
}

export default CardWrapper;
