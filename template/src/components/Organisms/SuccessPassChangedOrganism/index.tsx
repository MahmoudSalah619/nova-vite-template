import { useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import successJIF from "@/src/assets/images/successJIF.gif";
import Image from "@/src/components/Atoms/Image";

export default function SuccessPassChangedOrganism() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={successJIF}
          alt="success jif"
          width={225}
          height={225}
          className={styles.img}
        />
      </div>
      <Text
        fontSize={18}
        fontFamily="font500"
        color="grey700"
        i18nKey="password_changed_message"
      />
      <Button
        customStyle={styles.btn}
        isFullWidth
        title="Login"
        onClick={() => navigate("/login")}
      />
    </div>
  );
}
