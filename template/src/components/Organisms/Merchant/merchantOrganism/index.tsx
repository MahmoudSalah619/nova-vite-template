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

export default function MerchantOrganism() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);

  const filters = [
    { key: Status.VIEW_ALL, label: t("view_all_filter") },
    { key: Status.ACTIVE, label: t("active_filter") },
    { key: Status.INACTIVE, label: t("in_active_filter") },
    { key: Status.SUSPENDED, label: t("suspended_filter") },
    { key: Status.AWAITING_APPROVAL, label: t("awaiting_approval") },
  ];

  const columns = [
    {
      title: t("merchant_name_column"),
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      title: t("status_column"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: t("number_of_product"),
      dataIndex: "numberOfProduct",
      key: "numberOfProduct",
    },
    {
      title: t("Revenue"),
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: t("Rating"),
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: t("join_date_column"),
      dataIndex: "joinDate",
      key: "joinDate",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    merchantName: `Merchant Name`,
    status:
      i % 5 === 0
        ? Status.ACTIVE
        : i % 5 === 1
          ? Status.AWAITING_APPROVAL
          : i % 5 === 2
            ? Status.SUSPENDED
            : i % 5 === 3
              ? Status.ACTIVE
              : Status.INACTIVE,
    numberOfProduct: "123,45",
    revenue: "EGP 123,456",
    rating: "4.5",
    joinDate: "12/12/2021",
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
      <PageHeader title="Merchants">
        <Button title="Export as CSV" variant="transparent-grey" />
        <Button title="Import as CSV" variant="transparent-grey" />
        <Button
          title="Create new merchant"
          onClick={() => navigate("add-merchant")}
        />
      </PageHeader>

      <MainTableOrganism
        showHeader
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
        rowOnClick={() => navigate("merchant-details")}
        dateBtn
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
