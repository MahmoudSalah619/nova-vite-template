import { useNavigate } from "react-router-dom";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import MainTableOrganism from "@/template/src/components/Organisms/MainTableOrganism";
import ProductName from "@/template/src/components/Molecules/ProductName";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import StatusIndicator from "@/template/src/components/Molecules/StatusIndicator";
import Status from "@/template/constants/Status";
import Image from "@/template/src/components/Atoms/Image";
import Text from "@/template/src/components/Atoms/Text";
import bag from "@/src/assets/images/Heart.png";
import styles from "./styles.module.scss";

export default function UserProducts({
  hasProducts,
}: {
  hasProducts: boolean;
}) {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();

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
      title: t("merchant_name_column"),
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      title: t("category_column"),
      dataIndex: "category",
      key: "category",
    },
    {
      title: t("price_column"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("status_column"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product ${i + 1}`,
    category: "Men, Hoodies",
    price: "1234",
    merchantName: "Merchant Name",
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
  }));

  return (
    <div>
      {hasProducts ? (
        <MainTableOrganism
          showHeader={false}
          columns={columns}
          dataSource={allData}
          rowOnClick={() => navigate("product-details")}
        />
      ) : (
        <div className={styles.emptyState}>
          <Image src={bag} alt="bag" height={120} width={120} />
          <Text fontSize={22} fontFamily="font500">
            User has no favorites yet
          </Text>
          <Text fontSize={14} fontFamily="font400">
            Items will appear here when the user adds them to their favorites
          </Text>
        </div>
      )}
    </div>
  );
}
