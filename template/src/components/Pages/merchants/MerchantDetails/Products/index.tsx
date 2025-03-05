import { useNavigate } from "react-router-dom";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import ProductName from "@/src/components/Molecules/ProductName";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import DateTimeDisplay from "@/src/components/Molecules/DateTimeDisplay";
import StatusIndicator from "@/src/components/Molecules/StatusIndicator";
import Status from "@/constants/Status";

export default function MerchantProducts() {
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
      title: t("category_column"),
      dataIndex: "category",
      key: "category",
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
  return (
    <div>
      <MainTableOrganism
        showHeader={false}
        columns={columns}
        dataSource={allData}
        rowOnClick={() => navigate("product-details")}
      />
    </div>
  );
}
