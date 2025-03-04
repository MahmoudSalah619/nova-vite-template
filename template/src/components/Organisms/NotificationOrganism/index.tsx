import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import SearchFilterBarForNotifications from "../../Molecules/SearchFilterForNotifications";
import NotificationsTabs from "../../Pages/notifications/NotificationsTabs";

export default function NotificationsOrganism() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <PageHeader title="Notifications">
        <Button
          title="push notification"
          onClick={() => navigate("push-notification")}
        />
      </PageHeader>

      <SearchFilterBarForNotifications />
      <NotificationsTabs />
    </section>
  );
}
