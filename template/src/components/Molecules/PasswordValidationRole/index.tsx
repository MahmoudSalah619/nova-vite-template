import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import correct from "@/src/assets/images/correct.png";
import wrong from "@/src/assets/images/wrong.png";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function PasswordValidationRole({
  title,
  isValid,
}: {
  title: TranslationKeyEnum;
  isValid?: boolean;
}) {
  const { t } = useAutoCompleteTranslation();
  return (
    <div className={styles.container}>
      {/* Icon */}
      <Image src={isValid ? correct : wrong} alt="" width={16} height={16} />
      <Text fontSize={12} fontFamily="font500" color="grey600">
        {t(title)}
      </Text>
    </div>
  );
}

export default PasswordValidationRole;
