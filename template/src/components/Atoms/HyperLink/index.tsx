import { Link, LinkProps } from "react-router-dom";
import Text from "../Text";
import styles from "./styles.module.scss";

interface HyperLinkProps extends LinkProps {
  title: string;
  fontSize: 12 | 14 | 16;
}

function HyperLink({ title, fontSize, ...otherProps }: HyperLinkProps) {
  const fontWeight = fontSize === 12 ? "font400" : "font500";
  return (
    <Link className={styles.link} {...otherProps}>
      <Text
        color="primary"
        fontSize={fontSize}
        fontFamily={fontWeight}
        className={styles.customText}
      >
        {title}
      </Text>
    </Link>
  );
}

export default HyperLink;
