import PageHeader from "@/src/components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import MerchantDetailsCard from "@/src/components/Organisms/Merchant/marchentDetailsCard";
import MerchantTabs from "../MerchantTabs";

export default function MerchantDetails() {
  return (
    <main className={styles.container}>
      <PageHeader title="Merchant Name" titleImg />

      <MerchantDetailsCard
        status="Active"
        joinDate="29/6/2024"
        bio="Merchant Description"
        commercialRegister="13/9/2024 11:50PM"
        customerAddress="18 Nozha St., Apartment 3, 1st Floor, Nasr City, Cairo, Egypt"
        email="merchant@ardi.com"
        phoneNumber="+20124859834"
        taxId="13/9/2024 11:50PM"
      />

      <MerchantTabs />
    </main>
  );
}
