import { KeyboardEventHandler } from "react";

export type optionType = {
  id: number | string;
  value: string;
  disabled?: boolean;
};

export interface SelectionSearchInputAtomProps {
  containerStyle?: string;
  size?: "small" | "large";
  onChange?: (val: string) => void;
  value?: string;
  options: optionType[];
  placeholder?: string;
  label?: string;
  status?: "error" | "";
  isDisabled?: boolean;
  defaultValue?: string;
  isLoading?: boolean;
  onSearch: (e: string) => void;
  onInputKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSelect: (value: string, option: optionType) => void;
  errorMsg?: string;
  prefixIcon?: string;
}
