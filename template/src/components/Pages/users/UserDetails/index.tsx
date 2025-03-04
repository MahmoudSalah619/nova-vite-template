import PageHeader from "@/template/src/components/Molecules/PageHeader";
import UserDetailsCard from "@/template/src/components/Organisms/User/UserDetailsCard";
import styles from "./styles.module.scss";
import UserTabs from "../UserTabs";

export default function UserDetails() {
  return (
    <div className={styles.container}>
      <PageHeader title="user_Name" />
      <UserDetailsCard
        status="Active"
        joinDate="29/6/2024"
        customerAddress="18 Nozha St., Apartment 3, 1st Floor, Nasr City, Cairo, Egypt"
        email="User@ardi.com"
        phoneNumber="+20124859834"
        lastSingIn="29/6/2024 3:00PM"
      />

      <UserTabs />
    </div>
  );
}
