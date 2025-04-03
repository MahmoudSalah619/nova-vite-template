import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

export interface TextInputAtomProps {
  name?: string;
  containerStyle?: string;
  inputStyle?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: TranslationKeyEnum;
  labelStyle?: string;
  isPasswordInput?: boolean;
  type?: "password" | "textarea" | "text" | "number";
  status?: "default" | "error" | "disabled";
  errorMsg?: string;
  reactHookFormProps?: UseFormRegisterReturn;
  prefixIcon?: string;
  suffixIcon?: string;
}
