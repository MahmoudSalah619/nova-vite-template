import styles from "./styles.module.scss";
import TextInputAtom from "../../Atoms/TextInput";
import CardWrapper from "../../Wrappers/CardWrapper";
import Image from "../../Atoms/Image";
import DeleteIcon from "@/src/assets/icons/products/delete-icon.svg";
import Button from "../../Atoms/Button";
import { AddProductInfoOrganismProps } from "./types";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function AddProductInfoOrganism({
  cardTitle,
  labelTitle,
  buttonTitle,
}: AddProductInfoOrganismProps) {
  const { t } = useAutoCompleteTranslation();
  return (
    <CardWrapper title={t(cardTitle)}>
      <div className={styles.inputContainer}>
        <TextInputAtom label={labelTitle} inputStyle={styles.input} />
        <Image
          src={DeleteIcon}
          alt="delete icon"
          width={24}
          height={24}
          className={styles.deleteIcon}
        />
      </div>

      <Button title={buttonTitle} />
    </CardWrapper>
  );
}

export default AddProductInfoOrganism;
