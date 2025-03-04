import { useNavigate } from "react-router-dom";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import StatusIndicator from "@/template/src/components/Molecules/StatusIndicator";
import MainTableOrganism from "@/template/src/components/Organisms/MainTableOrganism";
import styles from "./styles.module.scss";
import Status from "@/template/constants/Status";
import Button from "@/template/src/components/Atoms/Button";

export default function PendingProducts() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();

  const columns = [
    { title: t("product_name_column"), dataIndex: "product", key: "product" },
    { title: t("category_column"), dataIndex: "category", key: "category" },
    {
      title: t("price_column"),
      dataIndex: "price",
      key: "price",
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
      title: t("actions_column"),
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className={styles.actions}>
          <Button title="approved" fontColor="dark" />
          <Button
            title="rejected"
            variant="transparent-grey"
            onClick={() => navigate("/products/edit-product")}
          />
        </div>
      ),
    },
  ];
  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    product: `Product Name`,
    category: "Men, Hoodies",
    price: "EGP 1234",
    stock: "1234",
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
    Actions: "Actions",
  }));
  return (
    <div>
      <MainTableOrganism
        columns={columns}
        dataSource={allData}
        showHeader={false}
      />
    </div>
  );
}
