import StaticticsCard from "../../Molecules/StaticticsCard";
import styles from "./styles.module.scss";

function StaticticsCardsContent({
  Statictics,
}: {
  Statictics: {
    id: string;
    label: string;
    value: string;
    icon?: string;
  }[];
}) {
  return (
    <div className={styles.staticticsContent}>
      {Statictics.map((item) => {
        return (
          <StaticticsCard
            key={item.id}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
}

export default StaticticsCardsContent;
