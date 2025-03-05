import styles from "./styles.module.scss";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Button from "@/src/components/Atoms/Button";
import EditCategoryGeneralInfoOrganism from "@/src/components/Organisms/Categories/EditCategory";

function EditCategory() {
  return (
    <main className={styles.container}>
      <PageHeader title="Edit Category">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" />
      </PageHeader>

      <EditCategoryGeneralInfoOrganism />
    </main>
  );
}

export default EditCategory;
