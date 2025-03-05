import { ButtonHTMLAttributes, ReactNode } from "react";
import FontFamily from "@/constants/FontFamily";
import COLORS from "@/constants/COLORS";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: TranslationKeyEnum;
  customStyle?: string;
  variant?:
    | "primary"
    | "dark"
    | "transparent-grey"
    | "transparent-error"
    | "warning"
    | "transparet";

  isFullWidth?: boolean;
  onClick?: () => void;
  suffix?: ReactNode;
  paddingBlock?: 4 | 8 | 10; // Allowed values for padding-block
  paddingInline?: 8 | 14 | 16; // Allowed values for padding-inline
  disabled?: boolean;
  fontSize?: number;
  fontFamily?: keyof typeof FontFamily;
  fontColor?: keyof typeof COLORS;
}
