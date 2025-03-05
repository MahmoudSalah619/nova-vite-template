// components/Molecules/DateTimeDisplay.tsx

import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import { DateTimeDisplayProps } from "./types";

function DateTimeDisplay({ date, time }: DateTimeDisplayProps) {
  return (
    <div className={styles.dateTimeContainer}>
      <Text fontSize={14} fontFamily="font500" color="dark">
        {date}
      </Text>
      <Text fontSize={12} fontFamily="font400" color="dark">
        {time}
      </Text>
    </div>
  );
}

export default DateTimeDisplay;
