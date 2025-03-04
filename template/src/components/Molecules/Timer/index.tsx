import { useEffect, useState } from "react";
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

export default function Timer() {
  const [timer, setTimer] = useState(0); // Timer state in seconds

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval when the timer stops
    }

    // Return undefined explicitly when timer === 0
    return undefined;
  }, [timer]);

  const handleRequestNewCode = () => {
    setTimer(60); // Start 1-minute timer
  };

  return (
    <div>
      {timer === 0 ? (
        <Button
          customStyle={styles.sendOTP}
          title="You can request a new code now"
          variant="transparet"
          onClick={handleRequestNewCode}
        />
      ) : (
        <Text fontSize={11} fontFamily="font500">
          {`Request a new code after ${String(Math.floor(timer / 60)).padStart(
            2,
            "0"
          )}:${String(timer % 60).padStart(2, "0")}`}
        </Text>
      )}
    </div>
  );
}
