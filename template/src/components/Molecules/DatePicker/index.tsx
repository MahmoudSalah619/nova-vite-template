/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";
import { DatePicker as DatePickerANTD } from "antd";
import type { TimeRangePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import RangeInput from "../RangeInput";
import Button from "../../Atoms/Button";
import SelectDate from "@/src/assets/icons/home/select-date.svg";
import Image from "../../Atoms/Image";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

const { RangePicker } = DatePickerANTD;

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Today", value: [dayjs().startOf("day"), dayjs().endOf("day")] },
  {
    label: "Yesterday",
    value: [
      dayjs().subtract(1, "day").startOf("day"),
      dayjs().subtract(1, "day").endOf("day"),
    ],
  },
  {
    label: "This Week",
    value: [dayjs().startOf("week"), dayjs().endOf("week")],
  },
  {
    label: "Last Week",
    value: [
      dayjs().subtract(1, "week").startOf("week"),
      dayjs().subtract(1, "week").endOf("week"),
    ],
  },
  {
    label: "This Month",
    value: [dayjs().startOf("month"), dayjs().endOf("month")],
  },
  {
    label: "Last Month",
    value: [
      dayjs().subtract(1, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],
  },
  {
    label: "This Year",
    value: [dayjs().startOf("year"), dayjs().endOf("year")],
  },
  {
    label: "Last Year",
    value: [
      dayjs().subtract(1, "year").startOf("year"),
      dayjs().subtract(1, "year").endOf("year"),
    ],
  },
  {
    label: "All Time",
    value: [dayjs("1970-01-01"), dayjs().endOf("day")],
  },
];

function DatePicker({ titleOfBtn }: { titleOfBtn?: TranslationKeyEnum }) {
  const [selectedRange, setSelectedRange] = useState<
    [Dayjs | null, Dayjs | null]
  >([dayjs().startOf("day"), dayjs().endOf("day")]);
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [rangeInputValues, setRangeInputValues] = useState({
    from: "",
    to: "",
  });

  const handleCalendarChange = (dates: null | (Dayjs | null)[]) => {
    setSelectedRange(dates as [Dayjs | null, Dayjs | null]);
    console.log(searchParams);
  };

  const handleApply = () => {
    if (selectedRange) {
      const [end, start] = selectedRange;
      setSearchParams({
        startDate: start?.format("YYYY-MM-DD") || "",
        endDate: end?.format("YYYY-MM-DD") || "",
      });
    }
    setOpen(false);
  };

  useEffect(() => {
    if (selectedRange) {
      const [toDate, fromDate] = selectedRange;
      setRangeInputValues({
        from: fromDate?.format("MMM D, YYYY") || "",
        to: toDate?.format("MMM D, YYYY") || "",
      });
    }
  }, [selectedRange]);

  const customFooterContent = (
    <div className={styles.customFooterContent}>
      <RangeInput
        disabled
        inputClassName={styles.rangeInput}
        fromValue={rangeInputValues.from}
        toValue={rangeInputValues.to}
        fromDatePicker
      />
      <Button
        title="Cancel"
        variant="transparent-grey"
        onClick={() => setOpen(false)}
      />
      <Button title="Apply" onClick={handleApply} />
    </div>
  );

  return (
    <div>
      <RangePicker
        open={open}
        value={selectedRange}
        presets={rangePresets}
        className={styles.rangePicker}
        renderExtraFooter={() => customFooterContent}
        placement="bottomRight"
        onCalendarChange={handleCalendarChange}
      />
      <Button
        className={styles.button}
        onClick={() => setOpen((prevState) => !prevState)}
        title={titleOfBtn || "Select Date"}
        variant="transparent-grey"
        suffix={
          <Image src={SelectDate} alt="Select Date" width={20} height={20} />
        }
        fontFamily="font500"
        fontSize={14}
      />
      <div
        className={open ? styles.closePopUp : ""}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}

export default DatePicker;
