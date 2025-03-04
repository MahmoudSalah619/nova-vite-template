import { ReactNode } from "react";
import { TranslationKeyEnum } from "@/template/types/TranslationKeyEnum";
import FontFamily from "@/template/constants/FontFamily";
import COLORS from "@/template/constants/COLORS";

export interface TextProps {
  children?: ReactNode;
  i18nKey?: TranslationKeyEnum;
  /**
   * @default 14
   */
  fontSize?: number;
  /**
   * @default "font400"
   */
  fontFamily?: keyof typeof FontFamily;
  /**
   * @default "dark"
   */
  color?: keyof typeof COLORS;
  lineHeight?: number;
  className?: string;
}
