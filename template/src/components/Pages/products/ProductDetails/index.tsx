import PageHeader from "@/template/src/components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import ProductReviews from "@/template/src/components/Molecules/ProductReviews";
import ProductDetailsCard from "@/template/src/components/Organisms/ProductDetailsCard";
import ProductDetailsDateFilter from "@/template/src/components/Organisms/ProductDetailsDateFilter";

function ProductDetails() {
  return (
    <main className={styles.container}>
      <PageHeader title="Product Details" />

      <ProductDetailsCard
        title="Red Basic T-Shirt"
        price="1,200"
        status="Active"
        date="20/12/2024 10:00PM"
      />

      <ProductDetailsDateFilter />

      <ProductReviews />
    </main>
  );
}

export default ProductDetails;
