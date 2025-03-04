import StaticticsCardsContent from "@/template/src/components/Organisms/StaticticsCardsContent";
import styles from "./styles.module.scss";
import RevenueLineChart from "@/template/src/components/Molecules/RevenueLineChart";
import OrdersBarChart from "@/template/src/components/Molecules/OrdersLineChart";
import star from "@/src/assets/icons/stars/yellowStar.svg";
import { TranslationKeyEnum } from "@/template/types/TranslationKeyEnum";

export default function MainDetails() {
  const Statictics = [
    { id: "1", label: "Revenue" as TranslationKeyEnum, value: "EGP 100,280" },
    { id: "2", label: "Orders" as TranslationKeyEnum, value: "1405" },
    { id: "3", label: "Avg. order value" as TranslationKeyEnum, value: "71" },
    {
      id: "2",
      label: "Avg. Rating" as TranslationKeyEnum,
      value: "4.4",
      icon: star,
    },
  ];
  return (
    <div>
      <StaticticsCardsContent Statictics={Statictics} />
      <div className={styles.chartContainer}>
        <RevenueLineChart />
        <OrdersBarChart />
      </div>
    </div>
  );
}
