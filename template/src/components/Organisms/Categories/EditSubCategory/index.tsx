import { useLocation } from "react-router-dom";
import RichTextEditor from "../../../Molecules/RichTextEditor";
import SelectionInput from "../../../Atoms/SelectionInput";
import TextInput from "../../../Atoms/TextInput";
import CardWrapper from "../../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function EditSubCategoryGeneralInfo() {
  const { state } = useLocation();

  const { t } = useAutoCompleteTranslation();
  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <CardWrapper title={t("General Info")}>
      <div className={styles.inputsHolder}>
        <TextInput
          type="text"
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          label="Add Category"
          labelStyle={styles.label}
          defaultValue={state}
        />

        <RichTextEditor
          containerStyle={styles.inputContainer}
          label={t("Category Description")}
        />
      </div>

      <div className={styles.selectionsHolder}>
        <SelectionInput
          containerStyle={styles.selectionContainerInput}
          label={t("Parent Category")}
          options={dummyOptions}
        />
      </div>
    </CardWrapper>
  );
}

export default EditSubCategoryGeneralInfo;
