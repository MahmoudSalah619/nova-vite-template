"use client";

import { AutoComplete } from "antd";
import { SelectionSearchInputAtomProps } from "./types";
import styles from "./styles.module.scss";
import Image from "../Image";
import Text from "../Text";

export default function SelectionSearchInput({
  containerStyle,
  options,
  value,
  placeholder = "",
  size = "large",
  label,
  status = "",
  isDisabled = false,
  defaultValue = undefined,
  onSearch, // use onSearch instead of onChange because in AutoComplete component onChange get triggered when input change or option is selected, but onSearch get triggered when input changes
  onSelect,
  errorMsg,
  prefixIcon,
}: SelectionSearchInputAtomProps) {
  const id = `selectInput${Math.random()}`;

  return (
    <>
      <div
        className={`${containerStyle} ${prefixIcon ? styles.withPrefix : ""}`}
        id={id}
      >
        {!!label && (
          <span className="d-block mb-2 Label100 White">{label}</span>
        )}
        <div className={styles.inputWithIconContainer}>
          {prefixIcon && (
            <Image
              alt="prefixIcon"
              src={prefixIcon}
              width={16.52}
              height={16.52}
              className={styles.prefixIcon}
            />
          )}
          <AutoComplete
            className={`${styles.selectInput} ${styles[size]} w-100`}
            getPopupContainer={(trigger: HTMLElement | null) => {
              return (
                (trigger?.parentNode as HTMLElement) ??
                document.getElementById(id)
              );
            }}
            placeholder={placeholder}
            value={value}
            options={options}
            status={status}
            disabled={isDisabled}
            defaultValue={defaultValue}
            onSearch={onSearch}
            onSelect={onSelect}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
      </div>
      {errorMsg && (
        <div className={styles.errorMsg}>
          <Text color="primary">{errorMsg}</Text>
        </div>
      )}
    </>
  );
}
