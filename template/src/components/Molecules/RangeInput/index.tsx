import { Input } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import { RangeInputProps } from "./types";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

function RangeInput({
  title,
  inputClassName,
  fromValue,
  toValue,
  clearFlag,
  disabled,
  fromDatePicker,
  onClearComplete,
}: RangeInputProps) {
  const { t } = useAutoCompleteTranslation();
  const [from, setFrom] = useState(fromValue);
  const [to, setTo] = useState(toValue);
  useEffect(() => {
    if (clearFlag) {
      setFrom("");
      setTo("");
      if (onClearComplete) {
        onClearComplete();
      }
    }
  }, [clearFlag, onClearComplete]);
  return (
    <div className={styles.container}>
      {!!title && (
        <Text fontFamily="font500" color="grey900" fontSize={16}>
          {title}
        </Text>
      )}
      <Input.Group compact className={styles.rangeInputContainer}>
        <Input
          placeholder={t("From")}
          className={inputClassName}
          value={fromDatePicker ? fromValue : from}
          onChange={(e) => setFrom(e.target.value)}
          disabled={disabled}
        />
        <span className={styles.rangeSeparator}> - </span>
        <Input
          placeholder={t("To")}
          className={inputClassName}
          value={fromDatePicker ? toValue : to}
          onChange={(e) => setTo(e.target.value)}
          disabled={disabled}
        />
      </Input.Group>
    </div>
  );
}

export default RangeInput;
