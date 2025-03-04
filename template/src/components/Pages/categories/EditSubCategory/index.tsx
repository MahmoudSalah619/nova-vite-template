import styles from "./styles.module.scss";
import PageHeader from "@/template/src/components/Molecules/PageHeader";
import Button from "@/template/src/components/Atoms/Button";
import EditCategoryGeneralInfoOrganism from "@/template/src/components/Organisms/Categories/EditCategory";

function EditSubCategory() {
  return (
    <main className={styles.container}>
      <PageHeader title="Edit Sub Category">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" />
      </PageHeader>

      <EditCategoryGeneralInfoOrganism />
    </main>
  );
}

export default EditSubCategory;
