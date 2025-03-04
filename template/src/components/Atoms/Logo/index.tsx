import logo from "@/src/assets/images/Logo.png";
import styles from "./style.module.scss";

export default function Logo() {
  return <img src={logo} className={styles.logo} alt="logo" />;
}
