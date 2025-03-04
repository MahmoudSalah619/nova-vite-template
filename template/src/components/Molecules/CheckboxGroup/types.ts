import { ReactNode } from "react";

interface CheckboxOption {
  label: ReactNode;
  value: string;
}

export interface CheckboxGroupProps {
  title: string;
  options: CheckboxOption[];
  value: string[];
  showSearch?: boolean;
  onChange?: (selectedValues: string[]) => void;
}
