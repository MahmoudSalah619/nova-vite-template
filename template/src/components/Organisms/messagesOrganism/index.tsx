import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import Status from "@/constants/Status";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import FilterButtons from "../../Molecules/FilterButtons";
import SearchFilterBarForMessages from "../../Molecules/SearchFilterForMessages";
import MessageIndicator from "../../Molecules/messageIndicator";

export default function MessagesOrganism() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);

  const filters = [
    { key: Status.VIEW_ALL, label: t("view_all_filter") },
    { key: Status.read, label: t("Read") },
    { key: Status.unread, label: t("Unread") },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <MessageIndicator isRead={status === Status.read} />
      ),
    },
    {
      title: t("user_Name"),
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: t("status_column"),
      dataIndex: "userType",
      key: "userType",
    },
    {
      title: t("Email Address"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("phone_number_label"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: t("message_label"),
      dataIndex: "message",
      key: "message",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    userName: `User Name`,
    userType: "Customer",
    email: "User@gmail.com",
    phoneNumber: "+20123483948",
    message: "message content",
    status: i % 5 === 0 ? Status.read : Status.unread,
  }));

  const filteredData =
    activeFilter === Status.VIEW_ALL
      ? allData
      : allData.filter((item) => item.status === activeFilter);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
  };

  return (
    <section className={styles.container}>
      <PageHeader title="Messages">
        <Button title="Export" variant="transparent-grey" />
        <Button title="Create new user" />
      </PageHeader>

      <SearchFilterBarForMessages />

      <MainTableOrganism
        showHeader
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
        rowOnClick={() => navigate("message-details")}
        filterBtn
      >
        <FilterButtons
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </MainTableOrganism>
    </section>
  );
}
