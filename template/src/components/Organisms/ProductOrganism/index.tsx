import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilterBar from "../../Molecules/SearchFilterBar";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import StatusIndicator from "../../Molecules/StatusIndicator";
import DateTimeDisplay from "../../Molecules/DateTimeDisplay";
import ProductName from "../../Molecules/ProductName";
import Status from "@/constants/Status";
import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import FilterButtons from "../../Molecules/FilterButtons";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function ProductOrganism() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(Status.VIEW_ALL);

  const filters = [
    { key: Status.VIEW_ALL, label: t("view_all_filter") },
    { key: Status.PUBLISHED, label: t("published_filter") },
    { key: Status.IN_REVIEW, label: t("in_review_filter") },
    { key: Status.REJECTED, label: t("rejected_filter") },
    { key: Status.INACTIVE, label: t("in_active_filter") },
  ];

  const columns = [
    {
      title: t("product_name_column"),
      dataIndex: "productName",
      key: "productName",
      render: (text: string) => (
        <ProductName text={text} AvatarImage={AvatarImage} />
      ),
    },
    {
      title: t("category_column"),
      dataIndex: "category",
      key: "category",
    },
    {
      title: t("created_on_column"),
      dataIndex: "createdOn",
      key: "createdOn",
      render: () => <DateTimeDisplay date="20 May 2024" time="12:00 PM" />,
    },
    {
      title: t("published_on_column"),
      dataIndex: "publishedOn",
      key: "publishedOn",
      render: () => <DateTimeDisplay date="20 May 2024" time="12:00 PM" />,
    },
    {
      title: t("price_column"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("Orders"),
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: t("stock_column"),
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: t("status_column"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: t("Revenue"),
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product ${i + 1}`,
    category: "Men, Hoodies",
    createdOn: "20 May 2024 12:00 PM",
    publishedOn: "20 May 2024 12:00 PM",
    price: "1234",
    orders: "1234",
    stock: "1234",
    status:
      i % 5 === 0
        ? Status.PUBLISHED
        : i % 5 === 1
          ? Status.IN_REVIEW
          : i % 5 === 2
            ? Status.REJECTED
            : i % 5 === 3
              ? Status.IN_DRAFT
              : Status.INACTIVE,
    revenue: "EGP 123,456",
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
      <PageHeader title="Products">
        <Button title="Export as CSV" variant="transparent-grey" />
        <Button title="Import as CSV" variant="transparent-grey" />
        <Button title="Add Product" onClick={() => navigate("add-product")} />
      </PageHeader>

      <SearchFilterBar />

      <MainTableOrganism
        showHeader
        columns={columns}
        dataSource={filteredData}
        headerClassName={styles.headerContainer}
        rowOnClick={() => navigate("product-details")}
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

export default ProductOrganism;
