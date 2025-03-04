import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import styles from "./styles.module.scss";
import BrandProfileInfoOrganism from "../../Organisms/BrandProfileInfoOrganism";

function BrandProfile() {
  return (
    <div className={styles.container}>
      <PageHeader title="Brand Profile">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" variant="transparent-grey" />
      </PageHeader>

      <BrandProfileInfoOrganism />
    </div>
  );
}

export default BrandProfile;
