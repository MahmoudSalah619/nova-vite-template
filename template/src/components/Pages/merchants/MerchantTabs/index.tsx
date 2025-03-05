import { Tabs, TabsProps } from "antd";
import CardWrapper from "@/src/components/Wrappers/CardWrapper";
import ProductReviews from "@/src/components/Molecules/ProductReviews";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import MainDetails from "../MerchantDetails/MainDetails";
import MerchantOrders from "../MerchantDetails/Orders";
import MerchantProducts from "../MerchantDetails/Products";
import PendingProducts from "../MerchantDetails/PendingProducts";
import Image from "@/src/components/Atoms/Image";
import filter from "@/src/assets/icons/filter-lines.svg";

export default function MerchantTabs() {
  const { t } = useAutoCompleteTranslation();
  const onChange = (key: string) => {
    console.log(key);
  };

  const operations = (
    <button className={styles.filterBtn}>
      <Image src={filter} alt="filter" width={20} height={20} />
      Filters
    </button>
  );
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("Main Details"),
      children: <MainDetails />,
    },
    {
      key: "2",
      label: t("Orders"),
      children: <MerchantOrders />,
    },
    {
      key: "3",
      label: t("Products"),
      children: <MerchantProducts />,
    },
    {
      key: "4",
      label: t("Pending Producsts"),
      children: <PendingProducts />,
    },
    {
      key: "5",
      label: t("reviews"),
      children: <ProductReviews />,
    },
  ];
  return (
    <CardWrapper className={styles.container}>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="merchantTab"
        tabBarExtraContent={operations}
      />
    </CardWrapper>
  );
}
