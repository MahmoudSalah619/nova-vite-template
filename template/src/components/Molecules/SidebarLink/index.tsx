import { Link } from "react-router-dom";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { SidebarLinkProps } from "./types";

function SidebarLink({
  icon,
  label,
  isActive,
  className,
  href,
  onClick,
}: SidebarLinkProps) {
  console.log(icon);
  return (
    <Link
      className={`${styles.navbarLink} ${className} ${
        isActive ? styles.active : ""
      }`}
      to={href}
      onClick={onClick}
      replace
    >
      {/* <Icon name={icon} size={24} className={styles.icon} /> */}
      <Text
        fontSize={16}
        fontFamily="font500"
        color={isActive ? "grey50" : "grey900"}
      >
        {label}
      </Text>
    </Link>
  );
}

export default SidebarLink;
