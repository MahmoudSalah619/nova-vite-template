import Button from "../../Atoms/Button";
import PageHeader from "../../Molecules/PageHeader";
import AddPromoIncludedProducts from "../../Organisms/AddPromoIncludedProducts";
import AddPromoMainInfo from "../../Organisms/AddPromoMainInfo";
import styles from "./styles.module.scss";

function AddPromoCode() {
  return (
    <main className={styles.container}>
      <PageHeader title="Add Promo Code">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Create Promo Code" />
      </PageHeader>

      <AddPromoMainInfo />

      <AddPromoIncludedProducts />
    </main>
  );
}

export default AddPromoCode;
