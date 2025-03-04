import { useEffect, useRef } from "react";
import { TextInputAtomProps } from "./types";
import styles from "./styles.module.scss";
import Text from "../Text";
import Image from "../Image";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

export default function TextInput({
  containerStyle,
  inputStyle,
  name,
  value,
  onChange,
  placeholder,
  label,
  labelStyle,
  type = "text",
  status = "default",
  errorMsg,
  reactHookFormProps,
  prefixIcon,
  defaultValue,
}: TextInputAtomProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useAutoCompleteTranslation();

  useEffect(() => {
    const cancelWheel = (e: WheelEvent) =>
      inputRef.current && e.preventDefault();
    inputRef?.current?.addEventListener("wheel", cancelWheel, {
      passive: false,
    });
    return () => inputRef?.current?.removeEventListener("wheel", cancelWheel);
  }, []);

  return (
    <>
      <div className={`${styles.container} ${containerStyle}`}>
        {!!label && (
          <span className={`${styles.label} ${labelStyle}`}>{t(label)}</span>
        )}

        <div
          className={`${styles.inputContent} ${styles[status]} ${inputStyle} ${
            prefixIcon ? styles.withPrefix : ""
          }`}
        >
          {prefixIcon && (
            <Image
              alt="prefixIcon"
              src={prefixIcon}
              width={26.52}
              height={26.52}
              className={styles.prefixIcon}
            />
          )}
          {type === "textarea" ? (
            <textarea
              name={name}
              className={styles.textArea}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              {...reactHookFormProps}
              rows={7}
            />
          ) : (
            <input
              autoCapitalize="off"
              ref={type === "number" ? inputRef : undefined}
              onKeyDown={
                type === "number"
                  ? (evt) =>
                      ["e", "E", "+", "-", "ArrowDown", "ArrowUp"].includes(
                        evt.key
                      ) && evt.preventDefault()
                  : undefined
              }
              disabled={status === "disabled"}
              type={type}
              name={name}
              className="TextPrimaryBlack"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              defaultValue={defaultValue}
              {...reactHookFormProps}
            />
          )}
        </div>
      </div>
      {errorMsg && (
        <div className={styles.errorMsg}>
          <Text color="red500" fontSize={11} fontFamily="font500">
            {errorMsg}
          </Text>
        </div>
      )}
    </>
  );
}
