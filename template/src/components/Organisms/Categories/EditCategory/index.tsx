import { useLocation } from "react-router-dom";
import CardWrapper from "@/src/components/Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import TextInput from "@/src/components/Atoms/TextInput";
import RichTextEditor from "@/src/components/Molecules/RichTextEditor";

function EditCategoryGeneralInfoOrganism() {
  const { t } = useAutoCompleteTranslation();
  const { state } = useLocation();

  return (
    <CardWrapper title={t("General Info")}>
      <div className={styles.inputsHolder}>
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="category_name"
          labelStyle={styles.label}
          defaultValue={state}
        />

        <RichTextEditor
          containerStyle={styles.inputContainer}
          label={t("Category Description")}
        />
      </div>
    </CardWrapper>
  );
}

export default EditCategoryGeneralInfoOrganism;
