import { Checkbox, Input } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import Image from "../../Atoms/Image";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { CheckboxGroupProps } from "./types";

function CheckboxGroup({
  title,
  options,
  showSearch = false,
  onChange,
  value,
}: CheckboxGroupProps) {
  const { t } = useAutoCompleteTranslation();
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  const handleCheckboxChange = (checkedValues: string[]) => {
    setSelectedValues(checkedValues as string[]);
    if (onChange) onChange(checkedValues as string[]);
  };
  useEffect(() => {
    setSelectedValues(value);
  }, [value]);

  return (
    <div className={styles.container}>
      <Text color="grey900" fontFamily="font500" fontSize={16}>
        {title}
      </Text>
      {showSearch && (
        <Input
          prefix={
            <Image src={SearchIcon} alt="search icon" width={20} height={20} />
          }
          placeholder={t("type_to_search_placeholder")}
          className={styles.searchInput}
        />
      )}
      <Checkbox.Group
        className={styles.checkboxGroup}
        value={selectedValues}
        onChange={handleCheckboxChange}
      >
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            className={styles.checkbox}
          >
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
}

export default CheckboxGroup;
