import { useState } from "react";
import DatePicker from "../../Molecules/DatePicker";
import FilterButtons from "../../Molecules/FilterButtons";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import StaticticsCard from "../../Molecules/StaticticsCard";

function ProductDetailsDateFilter() {
  const [activeDateFilter, setActiveDateFilter] = useState("12months");
  const { t } = useAutoCompleteTranslation();

  const dateFilters = [
    { key: "12months", label: t("date_filter_12months") },
    { key: "30days", label: t("date_filter_30days") },
    { key: "7days", label: t("date_filter_7days") },
    { key: "24hours", label: t("date_filter_24hours") },
  ];

  const Statictics = [
    { id: "1", label: "Total Orders" as TranslationKeyEnum, value: "950" },
    { id: "2", label: "Revenue" as TranslationKeyEnum, value: "EGP 120,000" },
  ];

  const handleDateFilterChange = (key: string) => {
    setActiveDateFilter(key);
  };

  return (
    <CardWrapper className={styles.container}>
      <div className="flex-space-between">
        <FilterButtons
          filters={dateFilters}
          activeFilter={activeDateFilter}
          onFilterChange={handleDateFilterChange}
          isGrayButtons
        />

        <DatePicker />
      </div>

      <div className={styles.staticticsContent}>
        {Statictics.map((item) => {
          return (
            <StaticticsCard
              key={item.id}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </div>
    </CardWrapper>
  );
}

export default ProductDetailsDateFilter;
