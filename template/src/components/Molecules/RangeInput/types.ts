export interface RangeInputProps {
  title?: string;
  inputClassName?: string;
  fromValue?: string;
  toValue?: string;
  clearFlag?: boolean;
  onClearComplete?: () => void;
  disabled?: boolean;
  fromDatePicker?: boolean;
}
