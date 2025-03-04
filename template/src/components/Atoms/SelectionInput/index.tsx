import { Select } from "antd";
import { SelectionInputAtomProps } from "./types";
import styles from "./styles.module.scss";
import ARROW_DOWN from "@/src/assets/icons/arrow-down.svg";
import Image from "../Image";
import Text from "../Text";

export default function SelectionInput({
  containerStyle,
  onChange,
  options,
  value,
  placeholder = "",
  size = "large",
  label,
  status = "",
  mode = "",
  isDisabled = false,
  defaultValue = undefined,
  onScroll = undefined,
  showSearch = false,
  onSearch = undefined,
  onFilter = undefined,
  onInputKeyDown = undefined,
  errorMsg,
  prefixIcon,
}: SelectionInputAtomProps) {
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
          <Select
            showSearch={showSearch}
            mode={mode || undefined}
            className={`${styles[size]} ${styles[mode]} w-100`}
            getPopupContainer={(trigger: HTMLElement | null) => {
              return (
                (trigger?.parentNode as HTMLElement) ??
                document.getElementById(id)
              );
            }}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            options={options}
            status={status}
            disabled={isDisabled}
            defaultValue={defaultValue}
            onPopupScroll={onScroll}
            onSearch={onSearch}
            filterOption={onFilter}
            notFoundContent={null}
            onInputKeyDown={onInputKeyDown}
            defaultActiveFirstOption={!showSearch}
            suffixIcon={
              <Image alt="Arrow Down" src={ARROW_DOWN} width={24} height={24} />
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
