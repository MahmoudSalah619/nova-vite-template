import { useState } from "react";
import PageHeader from "@/template/src/components/Molecules/PageHeader";
import RevenueLineChart from "@/template/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/template/src/components/Molecules/OrdersLineChart";
import FilterOrganism from "../../FilterOrganism";
import MainTableOrganism from "../../MainTableOrganism";
import styles from "../styles.module.scss";
import FilterButtons from "@/template/src/components/Molecules/FilterButtons";
import DatePicker from "@/template/src/components/Molecules/DatePicker";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import StatusIndicator from "@/template/src/components/Molecules/StatusIndicator";
import Status from "@/template/constants/Status";
import TotalChart from "../../TotalCharts";

function AdminHomeView() {
  const { t } = useAutoCompleteTranslation();
  const [activeDateFilter, setActiveDateFilter] = useState("12months");

  const recentOrders = [
    {
      title: t("invoice_column"),
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: t("merchant_name_column"),
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      title: t("date_column"),
      dataIndex: "date",
      key: "date",
    },
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
  ];

  const topMerchants = [
    {
      title: t("merchant_name_column"),
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      title: t("Orders"),
      dataIndex: "orders",
      key: "orders",
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
  ];

  const dateFilters = [
    { key: "12months", label: t("date_filter_12months") },
    { key: "30days", label: t("date_filter_30days") },
    { key: "7days", label: t("date_filter_7days") },
    { key: "24hours", label: t("date_filter_24hours") },
  ];

  const ordersData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    invoice: `# ${i + 11}`,
    merchantName: "Merchant Name",
    date: "Mar 1, 2024",
    orderAmount: "EGP 1000",
    status:
      i % 5 === 0
        ? Status.PAID
        : i % 5 === 1
          ? Status.PAID
          : i % 5 === 2
            ? Status.REFUNDED
            : i % 5 === 3
              ? Status.CANCELLED
              : Status.REFUNDED,
  }));
  const merchantData = Array.from({ length: 7 }, (_, i) => ({
    key: (i + 1).toString(),
    merchantName: `Merchant Name`,
    orders: "1234",
    rating: "4.5",
    revenue: "EGP 1,234",
  }));

  const handleDateFilterChange = (key: string) => {
    setActiveDateFilter(key);
  };

  return (
    <>
      <PageHeader title="Dashboard" />
      <div className="flex-space-between">
        <FilterButtons
          filters={dateFilters}
          activeFilter={activeDateFilter}
          onFilterChange={handleDateFilterChange}
          isGrayButtons
        />

        <DatePicker />
      </div>
      <div className={styles.chartContainer}>
        <RevenueLineChart />
        <OrdersBarChart />
      </div>
      <div>
        <TotalChart />
      </div>

      <div className="flex flex-gap-large flex-align-start">
        <div className="flex-grow-1">
          <MainTableOrganism
            headerTitle={t("Recent Orders")}
            columns={recentOrders}
            dataSource={ordersData}
            headerClassName={styles.headerContainer}
            showHeader
          >
            <FilterOrganism />
          </MainTableOrganism>
        </div>

        <MainTableOrganism
          headerTitle={t("Top Merchants by Revenue")}
          columns={topMerchants}
          dataSource={merchantData}
          showPagination={false}
          showHeader
          headerClassName={styles.headerContainer}
        />
      </div>
    </>
  );
}
export default AdminHomeView;
