import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

export default function ScheduledNotifications() {
  const { t } = useAutoCompleteTranslation();
  const columns = [
    {
      title: t("title"),
      dataIndex: "userName",
      key: "userName",
    },

    {
      title: t("Date Created"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("scheduled for"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: t("Notification Message"),
      dataIndex: "message",
      key: "message",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    userName: `Notification Title`,
    email: "20 May 2024",
    phoneNumber: "20 May 2024",
    message: "Notification Message Content",
  }));

  return (
    <section className={styles.container}>
      <MainTableOrganism
        showHeader={false}
        columns={columns}
        dataSource={allData}
        headerClassName={styles.headerContainer}
      />
    </section>
  );
}
