import ProductGeneralInfoOrganism from "@/template/src/components/Organisms/ProductGeneralInfoOrganism";
import MediaOrganism from "@/template/src/components/Organisms/MediaOrganism";
import styles from "./styles.module.scss";
import AddProductInfoOrganism from "@/template/src/components/Organisms/AddProductInfoOrganism";
import PriceAndQuantityOrganism from "@/template/src/components/Organisms/PriceAndQuantityOrganism";
import PageHeader from "@/template/src/components/Molecules/PageHeader";
import Button from "@/template/src/components/Atoms/Button";

function AddProduct() {
  return (
    <main className={styles.container}>
      <PageHeader title="Add Product">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" variant="transparent-grey" />
        <Button title="Publish" />
      </PageHeader>

      <ProductGeneralInfoOrganism />

      <MediaOrganism />

      <AddProductInfoOrganism
        cardTitle="Product Sizes"
        labelTitle="Size Value"
        buttonTitle="Add Another Size"
      />

      <AddProductInfoOrganism
        cardTitle="Product Colors"
        labelTitle="Color Value"
        buttonTitle="Add Another Color"
      />

      <PriceAndQuantityOrganism />
    </main>
  );
}

export default AddProduct;
