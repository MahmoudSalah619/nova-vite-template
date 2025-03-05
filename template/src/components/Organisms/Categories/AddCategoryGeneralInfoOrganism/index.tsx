import CardWrapper from "@/src/components/Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import TextInput from "@/src/components/Atoms/TextInput";
import RichTextEditor from "@/src/components/Molecules/RichTextEditor";

function AddCategoryGeneralInfoOrganism() {
  const { t } = useAutoCompleteTranslation();

  return (
    <CardWrapper title={t("General Info")}>
      <div className={styles.inputsHolder}>
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="category_name"
          labelStyle={styles.label}
        />

        <RichTextEditor
          containerStyle={styles.inputContainer}
          label={t("Category Description")}
        />
      </div>
    </CardWrapper>
  );
}

export default AddCategoryGeneralInfoOrganism;
