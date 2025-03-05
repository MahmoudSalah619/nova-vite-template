import { useState } from "react";
import { DatePicker as DatePickerANTD, Input, TimePicker } from "antd";
import type { Dayjs } from "dayjs";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

const { RangePicker } = DatePickerANTD;

function DatePickerWithInput() {
  const { t } = useAutoCompleteTranslation();
  const [open, setOpen] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [rangeInputValues, setRangeInputValues] = useState({
    from: null,
    to: null,
  });
  const [timeRangeInputValues, setTimeInputValues] = useState<{
    from: Dayjs | null;
    to: Dayjs | null;
  }>({
    from: null,
    to: null,
  });

  const handleCalendarChange = (dates: null | (Dayjs | null)[]) => {
    setRangeInputValues((prev) => ({ ...prev, [open]: dates?.[0] }));
    setOpen("");
  };

  const onChange = (time: Dayjs | Dayjs[]) => {
    setTimeInputValues((prev) => ({ ...prev, [openTime]: time }));
  };

  return (
    <div>
      <TimePicker
        open={!!openTime}
        onCalendarChange={onChange}
        placement="bottomRight"
        format="HH:mm"
        onOk={() => setOpenTime("")}
      />
      <RangePicker
        open={!!open}
        value={[rangeInputValues.from, rangeInputValues.to]}
        className={styles.rangePicker}
        placement="bottomRight"
        format="DD-MM-YYYY"
        onCalendarChange={handleCalendarChange}
      />

      <div className={styles.FromInputsContainer}>
        <div className={styles.inputCon}>
          <div className={styles.label}>
            <span>{t("start_date")}</span>
          </div>
          <Input
            onClick={() => setOpen("from")}
            value={
              rangeInputValues?.from
                ? (rangeInputValues.from as Dayjs)?.format("DD-MM-YYYY")
                : ""
            }
            maxLength={0}
          />
        </div>
        <div className={styles.inputCon}>
          <div className={styles.label}>
            <span>{t("time")}</span>
          </div>
          <Input
            onClick={() => setOpenTime("from")}
            value={
              timeRangeInputValues.from
                ? timeRangeInputValues?.from?.format("HH:mm")
                : ""
            }
            maxLength={0}
          />
        </div>
      </div>
      <div className={styles.ToInputsContainer}>
        <div className={styles.inputCon}>
          <div className={styles.label}>
            <span>{t("end_date")}</span>
          </div>
          <Input
            onClick={() => setOpen("to")}
            maxLength={0}
            value={
              rangeInputValues?.to
                ? (rangeInputValues.to as Dayjs).format("DD-MM-YYYY")
                : ""
            }
          />
        </div>
        <div className={styles.inputCon}>
          <div className={styles.label}>
            <span>{t("time")}</span>
          </div>

          <Input
            onClick={() => setOpenTime("to")}
            value={
              timeRangeInputValues.to
                ? timeRangeInputValues?.to?.format("HH:mm")
                : ""
            }
            maxLength={0}
          />
        </div>
      </div>
    </div>
  );
}

export default DatePickerWithInput;
