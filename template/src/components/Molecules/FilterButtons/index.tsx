import { Button } from "antd";
import { useMemo } from "react";
import styles from "./styles.module.scss";
import { FilterButtonsProps } from "./types";

function FilterButtons({
  filters,
  activeFilter,
  onFilterChange,
  isGrayButtons,
}: FilterButtonsProps) {
  const buttonStyles = useMemo(() => {
    return filters.map((filter, index) => {
      const firstItem = index === 0;
      const lastItem = index === filters.length - 1;

      return {
        key: filter.key,
        className: `
          ${activeFilter === filter.key ? styles.activeFilterButton : ""}
          ${firstItem ? styles.firstFilterButton : ""}
          ${lastItem ? styles.lastFilterButton : ""}
          ${
            activeFilter === filter.key && isGrayButtons
              ? styles.grayButtons
              : ""
          }
        `.trim(),
      };
    });
  }, [filters, activeFilter, isGrayButtons]);

  return (
    <div>
      {buttonStyles.map((ele, index) => (
        <Button
          key={ele.key}
          onClick={() => onFilterChange(ele.key)}
          className={`${styles.btnCon} ${ele.className}`}
        >
          {filters[index].label}
        </Button>
      ))}
    </div>
  );
}

export default FilterButtons;
