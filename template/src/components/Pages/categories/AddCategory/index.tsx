import styles from "./styles.module.scss";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Button from "@/src/components/Atoms/Button";
import AddCategoryGeneralInfoOrganism from "@/src/components/Organisms/Categories/AddCategoryGeneralInfoOrganism";

function AddCategory() {
  return (
    <main className={styles.container}>
      <PageHeader title="Add Category">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" />
      </PageHeader>

      <AddCategoryGeneralInfoOrganism />
    </main>
  );
}

export default AddCategory;
