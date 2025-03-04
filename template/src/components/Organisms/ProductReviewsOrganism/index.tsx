import ProductFullReviews from "../../Molecules/ProductsFullReviews";
import ProductDetailsCard from "../ProductDetailsCard";
import styles from "./styles.module.scss";

export default function ProductReviewOrganism() {
  return (
    <div className={styles.container}>
      <ProductDetailsCard
        title="Red Basic T-Shirt"
        price="1,200"
        status="Active"
        date="20/12/2024 10:00PM"
      />
      <ProductFullReviews />
    </div>
  );
}
