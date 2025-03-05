import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
// import { OrderTimelineStatus } from "./types";

function OrderTimeline() {
  const { t } = useAutoCompleteTranslation();

  const OrderTimeLineArray = [
    {
      process: t("order_delivered"),
      status: "Done",
      date: "Tuesday 20/4/2024  - 03:00PM",
    },
    {
      process: t("order_shipped"),
      status: "Done",
      date: "Tuesday 20/4/2024  - 03:00PM",
    },
    {
      process: t("order_accepted"),
      status: "pending",
      date: "Tuesday 20/4/2024  - 03:00PM",
    },
    {
      process: t("order_placed"),
      status: "pending",
      date: "Tuesday 20/4/2024  - 03:00PM",
    },
  ];

  return (
    <CardWrapper>
      <div className={styles.OrderTimelineContent}>
        <Text
          fontSize={18}
          fontFamily="font500"
          color="black"
          className={styles.title}
          i18nKey="order_timeline_title"
        />
        {OrderTimeLineArray.map((item) => {
          return (
            <div
              className={`${styles.Timeline} ${item.status === "Done" ? styles.Done : styles.pending}`}
            >
              <Text>{item.process}</Text>
              <Text>{item.date}</Text>
            </div>
          );
        })}
      </div>
    </CardWrapper>
  );
}

export default OrderTimeline;
