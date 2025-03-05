import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

function OrderSummary() {
  const { t } = useAutoCompleteTranslation();

  const OrderSummaryList = [
    { prop: t("order_summary_subtotal"), value: "2000" },
    { prop: t("order_summary_shipping"), value: "100" },
    { prop: t("order_summary_taxes"), value: "280" },
    { prop: t("order_summary_discount"), value: "100" },
    { prop: t("order_summary_total"), value: "2280" },
  ];

  return (
    <div className={styles.OrderInfo}>
      <Text
        color="grey700"
        fontFamily="font400Nenu"
        fontSize={17}
        className={styles.OrderInfo_title}
        i18nKey="Order Summary"
      />
      <div className={styles.columGap}>
        {OrderSummaryList.map((item) => {
          return (
            <div className={styles.orderInfo_line}>
              <Text>{item.prop}</Text>
              <Text>
                {item.prop === "Discount" && "- "}EGP {item.value}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderSummary;
