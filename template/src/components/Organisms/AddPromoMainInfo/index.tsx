import SelectionInput from "../../Atoms/SelectionInput";
import Text from "../../Atoms/Text";
import TextInput from "../../Atoms/TextInput";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";

function AddPromoMainInfo() {
  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <CardWrapper title="Main Info">
      <TextInput label="Offer Name" />

      <div className={styles.inputsHolder}>
        <SelectionInput
          label="Discount Percentage"
          options={dummyOptions}
          containerStyle={styles.selectionContainer}
        />
        <Text
          color="grey900"
          fontFamily="font500"
          fontSize={16}
          className={styles.or}
        >
          Or
        </Text>
        <SelectionInput
          label="Discount Amount"
          options={dummyOptions}
          containerStyle={styles.selectionContainer}
        />
      </div>

      <TextInput label="Usage Limit" />

      <div className={styles.dateSelectionContainer}>
        <SelectionInput
          label="Start Date"
          options={dummyOptions}
          containerStyle={styles.selectionContainer}
          placeholder="DD/MM/YYY"
        />

        <SelectionInput
          options={dummyOptions}
          containerStyle={styles.selectionContainer}
          placeholder="10:00PM"
        />
      </div>

      <div className={styles.dateSelectionContainer}>
        <SelectionInput
          label="End Date"
          options={dummyOptions}
          containerStyle={styles.selectionContainer}
          placeholder="DD/MM/YYY"
        />

        <SelectionInput
          options={dummyOptions}
          containerStyle={styles.selectionContainer}
          placeholder="10:00PM"
        />
      </div>
    </CardWrapper>
  );
}

export default AddPromoMainInfo;
