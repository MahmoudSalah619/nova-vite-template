import { useState } from "react";

export default function useToggleState<T = number>(initialState: T[]) {
  const [selectedValues, setselectedValues] = useState<T[]>(initialState);

  const isSelected = (value: T) => {
    return Boolean(selectedValues?.find((item) => item === value));
  };

  const addToSelected = (value: T) => {
    if (!isSelected(value)) {
      setselectedValues([...selectedValues, value]);
    } else {
      setselectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  const replaceState = (newValues: T[]) => {
    setselectedValues(newValues);
  };

  return {
    selectedValues,
    isSelected,
    addToSelected,
    replaceState,
  };
}
