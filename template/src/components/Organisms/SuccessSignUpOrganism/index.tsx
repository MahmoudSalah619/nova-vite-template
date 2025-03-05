import { useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import success from "@/src/assets/images/correct.png";
import Image from "@/src/components/Atoms/Image";

export default function SuccessSignUpOrganism() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image
          src={success}
          alt="success jif"
          width={225}
          height={225}
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <Text
          fontSize={18}
          fontFamily="font500"
          color="grey700"
          i18nKey="registration_pending_title"
        />
        <Text
          fontSize={16}
          fontFamily="font400"
          color="grey700"
          i18nKey="registration_pending_message"
        />
      </div>
      <Button
        customStyle={styles.btn}
        isFullWidth
        title="Go Back"
        onClick={() => navigate("/merchant-info")}
      />
    </div>
  );
}
