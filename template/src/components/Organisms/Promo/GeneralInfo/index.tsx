import CardWrapper from "@/src/components/Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import SelectionInput from "@/src/components/Atoms/SelectionInput";
import TextInput from "@/src/components/Atoms/TextInput";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Button from "@/src/components/Atoms/Button";
import AddPromoIncludedProducts from "../../AddPromoIncludedProducts";
import Text from "@/src/components/Atoms/Text";
import DatePickerWithInput from "@/src/components/Molecules/DatePickerWithInput";

function PromoGeneralInfoOrganism() {
  const { t } = useAutoCompleteTranslation();

  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="Add Promo Code">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Create Promo Code" />
      </PageHeader>
      <CardWrapper title={t("Main Info")}>
        <div className={styles.inputsHolder}>
          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Offer Name"
            labelStyle={styles.label}
          />
        </div>

        <div className={styles.selectionsHolder}>
          <SelectionInput
            containerStyle={styles.selectionContainerInput}
            label={t("Discount Percentage")}
            options={dummyOptions}
          />

          <Text className={styles.or}>Or</Text>

          <SelectionInput
            containerStyle={styles.selectionContainerInput}
            label={t("Discount Amount")}
            options={dummyOptions}
          />
        </div>
        <div className={styles.inputsHolder}>
          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Usage Limit"
            labelStyle={styles.label}
          />
        </div>

        <DatePickerWithInput />
      </CardWrapper>
      <AddPromoIncludedProducts />
    </div>
  );
}

export default PromoGeneralInfoOrganism;
