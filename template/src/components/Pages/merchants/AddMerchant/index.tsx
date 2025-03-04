import styles from "./styles.module.scss";
import PageHeader from "@/template/src/components/Molecules/PageHeader";
import Button from "@/template/src/components/Atoms/Button";
import MerchantLegalDocs from "@/template/src/components/Organisms/Merchant/MerchantLegalDocs";
import MerchantGeneralInfo from "@/template/src/components/Organisms/Merchant/MerchantGeneralInfo";

export default function AddMerchant() {
  return (
    <main className={styles.container}>
      <PageHeader title="Add Merchant">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Create new merchant" />
      </PageHeader>

      <MerchantGeneralInfo />
      <MerchantLegalDocs />
    </main>
  );
}
