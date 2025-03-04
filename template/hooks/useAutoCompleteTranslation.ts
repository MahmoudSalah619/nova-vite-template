import { useTranslation } from "react-i18next";
import { TranslationKeyEnum } from "@/template/types/TranslationKeyEnum";

export default function useAutoCompleteTranslation() {
  const { t: defaultT } = useTranslation();

  const t = (key: TranslationKeyEnum) => {
    return defaultT(key);
  };

  return { t };
}
