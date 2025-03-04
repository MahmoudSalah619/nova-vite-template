import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import OrderItemsCard from "../OrderItemsCard";
import OrderSummary from "../OrderSummary";
import styles from "./styles.module.scss";

function ItemsInOrder() {
  return (
    <CardWrapper>
      <div className={styles.OrdersList}>
        <Text
          fontSize={18}
          fontFamily="font500"
          color="black"
          className={styles.title}
          i18nKey="items in order"
        />
        <OrderItemsCard />
        <OrderItemsCard />
        <OrderSummary />
      </div>
    </CardWrapper>
  );
}

export default ItemsInOrder;
