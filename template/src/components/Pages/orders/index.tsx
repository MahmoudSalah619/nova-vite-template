import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Status from "@/constants/Status";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import FilterButtons from "../../Molecules/FilterButtons";
import MainTableOrganism from "../../Organisms/MainTableOrganism";
import styles from "./styles.module.scss";
import StatusIndicator from "../../Molecules/StatusIndicator";
import PageHeader from "../../Molecules/PageHeader";
import StaticticsCard from "../../Molecules/StaticticsCard";
import Button from "../../Atoms/Button";
import DatePicker from "../../Molecules/DatePicker";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function Orders() {
  const { t } = useAutoCompleteTranslation();
  const { role } = useGetUserInfo();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);
  const [activeDateFilter, setActiveDateFilter] = useState("12months");
  const navigate = useNavigate();

  const statistics = {
    seller: [
      { label: "total_orders_column" as TranslationKeyEnum, value: "950" },
      { label: "ordered_items_statistic" as TranslationKeyEnum, value: "1450" },
    ],
    admin: [
      { label: t("total_orders_column") as TranslationKeyEnum, value: "950" },
      {
        label: t("ordered_items_statistic") as TranslationKeyEnum,
        value: "1450",
      },
      { label: "Avg. order value" as TranslationKeyEnum, value: "EGP 1450" },
      { label: "Returns" as TranslationKeyEnum, value: "3" },
    ],
  };

  const filters = [
    { key: Status.VIEW_ALL, label: t("view_all_filter") },
    { key: Status.OPEN, label: t("open_filter") },
    { key: Status.PENDING, label: t("pending_filter") },
    { key: Status.CLOSED, label: t("closed_filter") },
    { key: Status.CANCELLED, label: t("Cancelled") },
    { key: Status.OVERDUE, label: t("overdue_filter") },
  ];

  const dateFilters = [
    { key: "12months", label: t("date_filter_12months") },
    { key: "30days", label: t("date_filter_30days") },
    { key: "7days", label: t("date_filter_7days") },
    { key: "24hours", label: t("date_filter_24hours") },
  ];

  const columns = [
    { title: t("invoice_column"), dataIndex: "invoice", key: "invoice" },
    {
      title: t("merchant_name_column"),
      dataIndex: "merchantName",
      key: "merchantName",
    },
    { title: t("date_column"), dataIndex: "date", key: "date" },
    {
      title: t("order_amount_column"),
      dataIndex: "orderAmount",
      key: "orderAmount",
    },
    {
      title: t("status_column"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: t("customer_name_title"),
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: t("payment_method_title"),
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: t("actions_column"),
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className={styles.actions}>
          <Button
            title="view_button"
            variant="transparet"
            fontColor="dark"
            onClick={() => navigate("/orders/order-details")}
          />
          <Button
            title="Edit"
            variant="transparet"
            fontColor="orange500"
            onClick={() => navigate("/products/edit-product")}
          />
        </div>
      ),
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    invoice: `#${i + 1}`,
    merchantName: "Merchant Name",
    date: "Mar 1, 2024",
    orderAmount: "EGP 1,000",
    status:
      i % 5 === 0
        ? Status.OPEN
        : i % 5 === 1
          ? Status.PENDING
          : i % 5 === 2
            ? Status.CLOSED
            : i % 5 === 3
              ? Status.CANCELLED
              : Status.OVERDUE,
    customerName: "Mohamed",
    paymentMethod: "Cash on delivery",
    Actions: "Actions",
  }));

  const filteredData =
    activeFilter === Status.VIEW_ALL
      ? allData
      : allData.filter((item) => item.status === activeFilter);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
  };

  const handleDateFilterChange = (key: string) => {
    setActiveDateFilter(key);
  };

  return (
    <main className={styles.container}>
      <PageHeader title="Orders" />

      <div className={styles.filterContainer}>
        <FilterButtons
          filters={dateFilters}
          activeFilter={activeDateFilter}
          onFilterChange={handleDateFilterChange}
          isGrayButtons
        />

        <DatePicker titleOfBtn="Select dates" />
      </div>

      <div className={styles.staticticsContainer}>
        {statistics[role].map((item) => (
          <StaticticsCard label={item.label} value={item.value} />
        ))}
      </div>

      <MainTableOrganism
        columns={columns}
        dataSource={filteredData}
        filterBtn
        showHeader
      >
        <FilterButtons
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </MainTableOrganism>
    </main>
  );
}

export default Orders;
