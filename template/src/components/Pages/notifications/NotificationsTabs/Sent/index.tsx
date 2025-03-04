import styles from "./styles.module.scss";
import MainTableOrganism from "@/template/src/components/Organisms/MainTableOrganism";
import Status from "@/template/constants/Status";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

export default function SentNotifications() {
  const { t } = useAutoCompleteTranslation();
  const columns = [
    {
      title: t("user_Name"),
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: t("sent_to"),
      dataIndex: "sentTo",
      key: "sentTo",
    },
    {
      title: t("Received by"),
      dataIndex: "receivedBy",
      key: "receivedBy",
    },
    {
      title: t("Opened by"),
      dataIndex: "openedBy",
      key: "openedBy",
    },
    {
      title: t("Date Created"),
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
    {
      title: t("scheduled for"),
      dataIndex: "scheduledFor",
      key: "scheduledFor",
    },
    {
      title: t("Notification Message"),
      dataIndex: "message",
      key: "message",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    userName: `Notification Title`,
    sentTo: "10,000 Users",
    receivedBy: "8,000 Users",
    openedBy: "7,000 Users",
    dateCreated: "20 May 2024",
    scheduledFor: "20 May 2024",
    message: "Notification Message Content",
    status: i % 5 === 0 ? Status.read : Status.unread,
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
