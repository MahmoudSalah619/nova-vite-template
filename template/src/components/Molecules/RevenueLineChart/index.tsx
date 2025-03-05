import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import styles from "./styles.module.scss";
import COLORS from "@/constants/COLORS";
import Text from "../../Atoms/Text";

function RevenueLineChart({ data }: { data?: [] }) {
  const fakeData = [
    { month: "", orders: 0 },
    { month: "Jan", orders: 4400 },
    { month: "Feb", orders: 4798 },
    { month: "Mar", orders: 6398 },
    { month: "Apr", orders: 8398 },
    { month: "May", orders: 7398 },
    { month: "Jun", orders: 5198 },
    { month: "Jul", orders: 9398 },
    { month: "Aug", orders: 8398 },
    { month: "Sep", orders: 3398 },
    { month: "Oct", orders: 2398 },
    { month: "Nov", orders: 3398 },
    { month: "Dec", orders: 10398 },
  ];

  return (
    <div className={styles.container}>
      <Text
        fontFamily="font500"
        fontSize={22}
        color="grey900"
        i18nKey="Revenue"
      />
      <ResponsiveContainer>
        <AreaChart height={135} data={data || fakeData}>
          <CartesianGrid
            strokeDasharray={0}
            strokeOpacity={0.3}
            vertical={false}
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <Area
            type="monotone"
            dataKey="orders"
            stroke={COLORS.primaryFF}
            strokeWidth={2}
            fill={COLORS.primaryFF}
            fillOpacity={0.09}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueLineChart;
