import Text from "@/template/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import { StatusIndicatorProps } from "./types";

function ActionIndicator({ status }: StatusIndicatorProps) {
  return (
    <div className={` ${styles[status]}`}>
      <Text fontSize={12} fontFamily="font500">
        {status}
      </Text>
    </div>
  );
}

export default ActionIndicator;
