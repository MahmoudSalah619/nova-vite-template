import PageHeader from "@/template/src/components/Molecules/PageHeader";
import DatePicker from "@/template/src/components/Molecules/DatePicker";
import RevenueLineChart from "@/template/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/template/src/components/Molecules/OrdersLineChart";
import ProductName from "@/template/src/components/Molecules/ProductName";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import FilterOrganism from "../../FilterOrganism";
import StaticticsCardsContent from "../../StaticticsCardsContent";
import MainTableOrganism from "../../MainTableOrganism";
import styles from "../styles.module.scss";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import star from "@/src/assets/icons/stars/yellowStar.svg";
import { TranslationKeyEnum } from "@/template/types/TranslationKeyEnum";

function SellerHomeView() {
  const { t } = useAutoCompleteTranslation();
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text: string) => (
        <ProductName text={text} AvatarImage={AvatarImage} />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  const data = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    productName: `Product Name`,
    category: "Men, Hoodies",
    price: "1234",
    orders: "1234",
    stock: "1234",
    revenue: "EGP 123,456",
  }));
  const Statictics = [
    { id: "1", label: "Revenue" as TranslationKeyEnum, value: "EGP 100,280" },
    { id: "2", label: "Orders" as TranslationKeyEnum, value: "1405" },
    { id: "3", label: "Orders in progress" as TranslationKeyEnum, value: "71" },
    {
      id: "2",
      label: "Avg. Rating" as TranslationKeyEnum,
      value: "4.4",
      icon: star,
    },
  ];
  return (
    <>
      <PageHeader title="Dashboard">
        <DatePicker titleOfBtn="Select dates" />
        <FilterOrganism />
      </PageHeader>

      <StaticticsCardsContent Statictics={Statictics} />

      <div className={styles.chartContainer}>
        <RevenueLineChart />
        <OrdersBarChart />
      </div>

      <MainTableOrganism
        showHeader
        headerTitle={t("Best Sellers")}
        columns={columns}
        dataSource={data}
        headerClassName={styles.headerContainer}
      >
        <FilterOrganism />
      </MainTableOrganism>
    </>
  );
}
export default SellerHomeView;
