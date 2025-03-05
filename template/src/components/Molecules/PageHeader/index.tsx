import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import Image from "../../Atoms/Image";
import vector from "@/src/assets/images/vector.png";

function PageHeader({
  title,
  children,
  fontSize = 36,
  childCon,
  titleImg,
}: {
  title?: TranslationKeyEnum;
  children?: ReactNode;
  fontSize?: number;
  childCon?: string;
  titleImg?: boolean;
}) {
  const { t } = useAutoCompleteTranslation();
  return (
    <div className={styles.container}>
      {title && (
        <div className={styles.titleCon}>
          {titleImg && <Image src={vector} width={42} alt="" height={42} />}
          <Text fontSize={fontSize} fontFamily="font500" color="grey900">
            {t(title)}
          </Text>
        </div>
      )}
      <div className={`${styles.childrenContainer} ${childCon}`}>
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
