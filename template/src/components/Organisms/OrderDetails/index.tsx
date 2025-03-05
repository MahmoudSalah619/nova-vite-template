import styles from "./styles.module.scss";
import OrderInfo from "../../Molecules/OrderInfo";
import Text from "../../Atoms/Text";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function OrderDetails() {
  const { t } = useAutoCompleteTranslation();

  const OrderDetailsArray = [
    {
      prop: t("status_column"),
      value: "Shipped",
    },
    {
      prop: t("seller_name"),
      value: "AD Customs",
    },
    {
      prop: t("order_date_label"),
      value: "23/20/2024",
    },
    {
      prop: t("customer_name_title"),
      value: "Ahmed Amer",
    },
    {
      prop: t("customer_address_label"),
      value: "123 Main St., New Cairo, Cairo, Egypt",
    },
    {
      prop: t("customer_phone_number_label"),
      value: "+200123485894",
    },
    {
      prop: t("shipping_method_label"),
      value: "Express Delivery",
    },
    {
      prop: t("payment_method_title"),
      value: "Online Payment",
    },
  ];

  return (
    <div className={styles.OrderDetailsCard}>
      <div className={styles.OrderDetailsTitle}>
        <Text
          fontSize={18}
          fontFamily="font500"
          color="black"
          i18nKey="order_details_title"
        />
      </div>
      {OrderDetailsArray.map((order, index) => {
        return (
          <OrderInfo
            title={order.prop}
            status={order.value}
            isMarked={index === 0 && true}
            isSeller={index === 1 && true}
          />
        );
      })}
    </div>
  );
}

export default OrderDetails;
