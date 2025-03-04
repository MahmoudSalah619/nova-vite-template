import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import COLORS from "@/template/constants/COLORS";
import FontFamily from "@/template/constants/FontFamily";
import { TextProps } from "./types";

export default function Text({
  children,
  i18nKey,
  className,
  fontSize = 14,
  fontFamily = "font500",
  color = "dark",
  lineHeight,
  ...otherProps
}: TextProps) {
  const { t } = useAutoCompleteTranslation();

  const textStyle = {
    color: COLORS[color],
    fontSize,
    fontFamily: FontFamily[fontFamily],
    lineHeight,
  };

  return (
    <p {...otherProps} style={textStyle} className={className}>
      {i18nKey ? t(i18nKey) : children}
    </p>
  );
}
