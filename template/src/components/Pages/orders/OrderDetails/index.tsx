import PageHeader from "@/template/src/components/Molecules/PageHeader";
import OrderDetails from "@/template/src/components/Organisms/OrderDetails";
import FilterOrganism from "@/template/src/components/Organisms/FilterOrganism";
import DatePicker from "@/template/src/components/Molecules/DatePicker";
import styles from "./styles.module.scss";
import ItemsInOrder from "@/template/src/components/Organisms/ItemsInOrder";
import OrderTimeline from "@/template/src/components/Organisms/OrderTimeLine";

function OrderDetailsPage() {
  return (
    <div className={styles.container}>
      <PageHeader title="Order #100">
        <DatePicker />
        <FilterOrganism />
      </PageHeader>
      <OrderDetails />
      <ItemsInOrder />
      <OrderTimeline />
    </div>
  );
}

export default OrderDetailsPage;
