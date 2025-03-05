import { useNavigate } from "react-router-dom";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import StatusIndicator from "@/src/components/Molecules/StatusIndicator";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import styles from "./styles.module.scss";
import Status from "@/constants/Status";
import Button from "@/src/components/Atoms/Button";

export default function MerchantOrders() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();

  const columns = [
    { title: t("invoice_column"), dataIndex: "invoice", key: "invoice" },
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
  return (
    <div>
      <MainTableOrganism
        showHeader={false}
        columns={columns}
        dataSource={allData}
      />
    </div>
  );
}
