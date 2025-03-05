import RecipientsTableOrganism from "@/src/components/Organisms/RecipientsTableOrganism";
import styles from "./styles.module.scss";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Button from "@/src/components/Atoms/Button";
import NotificationGeneralInfoOrganism from "@/src/components/Organisms/NotificationGeneralInfo";

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
