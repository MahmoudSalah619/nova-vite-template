import styles from "./styles.module.scss";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Button from "@/src/components/Atoms/Button";
import AddSubCategoryGeneralInfo from "@/src/components/Organisms/Categories/AddSubCategoryGeneralInfo";

function AddSubCategory() {
  return (
    <main className={styles.container}>
      <PageHeader title="Add Sub Categories">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" />
      </PageHeader>

      <AddSubCategoryGeneralInfo />
    </main>
  );
}

export default AddSubCategory;
