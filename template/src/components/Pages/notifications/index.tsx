import NotificationsOrganism from "../../Organisms/NotificationOrganism";
import styles from "./styles.module.scss";

function PushNotifications() {
  return (
    <main className={styles.container}>
      <NotificationsOrganism />
    </main>
  );
}

export default PushNotifications;
