import styles from "./styles.module.scss";
import PageHeader from "@/template/src/components/Molecules/PageHeader";
import Button from "@/template/src/components/Atoms/Button";
import UserGeneralInfo from "@/template/src/components/Organisms/User/UserGeneralInfo";

export default function AddUser() {
  return (
    <main className={styles.container}>
      <PageHeader title="Add User">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Create new user" />
      </PageHeader>

      <UserGeneralInfo />
    </main>
  );
}
