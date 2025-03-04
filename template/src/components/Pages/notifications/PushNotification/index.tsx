import RecipientsTableOrganism from "@/template/src/components/Organisms/RecipientsTableOrganism";
import styles from "./styles.module.scss";
import PageHeader from "@/template/src/components/Molecules/PageHeader";
import Button from "@/template/src/components/Atoms/Button";
import NotificationGeneralInfoOrganism from "@/template/src/components/Organisms/NotificationGeneralInfo";

function PushNotifications() {
  return (
    <main className={styles.container}>
      <PageHeader title="push notification">
        <Button title="Discard Changes" variant="transparent-error" />
        <Button title="Save Changes" variant="transparent-grey" />
        <Button title="push notification" />
      </PageHeader>
      <NotificationGeneralInfoOrganism />

      <RecipientsTableOrganism />
    </main>
  );
}

export default PushNotifications;
