import { KeyboardEventHandler, UIEvent } from "react";

export type optionType = { value: string; label: string; disabled?: boolean };
type FilterFunc<OptionType> = (
  inputValue: string,
  option?: OptionType
) => boolean;
export interface SelectionInputAtomProps {
  containerStyle?: string;
  size?: "small" | "large";
  onChange?: (
    value: string,
    option: optionType | optionType[] | undefined
  ) => void;
  value?: string | null;
  options: optionType[];
  placeholder?: string;
  label?: string;
  status?: "error" | "";
  mode?: "" | "tags";
  isDisabled?: boolean;
  defaultValue?: string | null;
  isLoading?: boolean;
  onScroll?: (e: UIEvent | undefined) => void;
  showSearch?: boolean;
  onSearch?: (e: string | number) => void;
  onFilter?: boolean | FilterFunc<optionType> | undefined;
  onInputKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  errorMsg?: string;
  prefixIcon?: string;
}
