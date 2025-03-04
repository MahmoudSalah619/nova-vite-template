import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/template/src/components/Organisms/MainTableOrganism";
import StatusIndicator from "../../../Molecules/StatusIndicator";
import Status from "@/template/constants/Status";
import PageHeader from "../../../Molecules/PageHeader";
import Button from "../../../Atoms/Button";
import FilterButtons from "../../../Molecules/FilterButtons";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import SearchFilterBarForUsers from "../../../Molecules/SearchFilterForUsers";

export default function UserOrganism() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);

  const filters = [
    { key: Status.VIEW_ALL, label: t("view_all_filter") },
    { key: Status.ACTIVE, label: t("active_filter") },
    { key: Status.SUSPENDED, label: t("suspended_filter") },
  ];

  const columns = [
    {
      title: t("user_Name"),
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: t("status_column"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
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
      title: t("total_orders_column"),
      dataIndex: "totalOrders",
      key: "totalOrders",
    },
    {
      title: t("join_date_column"),
      dataIndex: "joinDate",
      key: "joinDate",
      // render: () => <DateTimeDisplay date="" />,
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    userName: `User Name`,
    category: "Men, Hoodies",
    email: "User@gmail.com",
    publishedOn: "20 May 2024 12:00 PM",
    phoneNumber: "+20123483948",
    orders: "1234",
    totalOrders: "100",
    joinDate: "Jan 11, 2024",
    status: i % 5 === 0 ? Status.SUSPENDED : Status.ACTIVE,
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
      <PageHeader title="Users">
        <Button title="Export" variant="transparent-grey" />
        <Button title="Create new user" onClick={() => navigate("add-user")} />
      </PageHeader>

      <SearchFilterBarForUsers />

      <MainTableOrganism
        showHeader
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
        rowOnClick={() => navigate("user-details")}
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
