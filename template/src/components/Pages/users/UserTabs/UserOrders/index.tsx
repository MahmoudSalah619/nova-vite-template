import { useNavigate } from "react-router-dom";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import StatusIndicator from "@/src/components/Molecules/StatusIndicator";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import styles from "./styles.module.scss";
import Status from "@/constants/Status";
import Button from "@/src/components/Atoms/Button";
import bag from "@/src/assets/images/bag.png";
import Image from "@/src/components/Atoms/Image";
import Text from "@/src/components/Atoms/Text";

export default function UserOrders({ hasOrders }: { hasOrders: boolean }) {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();

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
    merchantName: "Merchant Name",
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
    paymentMethod: i % 5 === 0 ? "Cash on delivery" : "Online Payment",
    Actions: "Actions",
  }));
  return (
    <div>
      {hasOrders ? (
        <MainTableOrganism
          columns={columns}
          dataSource={allData}
          showHeader={false}
        />
      ) : (
        <div className={styles.emptyState}>
          <Image src={bag} alt="bag" height={120} width={120} />
          <Text fontSize={22} fontFamily="font500">
            User has no orders yet
          </Text>
          <Text fontSize={14} fontFamily="font400">
            Orders will appear here when the user makes an order.
          </Text>
        </div>
      )}
    </div>
  );
}
