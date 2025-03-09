import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import COLORS from "@/constants/COLORS";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";

function OrdersBarChart({ data }: { data?: [] }) {
  const fakeData = [
    { month: "Jan", orders: 2400 }, // Start low
    { month: "Feb", orders: 3200 }, // Peak
    { month: "Mar", orders: 2800 }, // Decrease
    { month: "Apr", orders: 2400 }, // Continue decreasing
    { month: "May", orders: 2000 }, // Further decrease
    { month: "Jun", orders: 1800 }, // Slight decrease
    { month: "Jul", orders: 1800 }, // Plateau
    { month: "Aug", orders: 2000 }, // Slight increase
    { month: "Sep", orders: 2200 }, // Continue increasing
    { month: "Oct", orders: 2400 }, // Peak
    { month: "Nov", orders: 2000 }, // Drop
    { month: "Dec", orders: 1800 }, // Further drop
  ];
  return (
    <div className={styles.container}>
      <Text
        fontFamily="font500"
        fontSize={22}
        color="grey900"
        i18nKey="Orders"
      />
      <ResponsiveContainer>
        <BarChart
          barCategoryGap={6}
          barGap={0}
          width={493}
          height={135}
          data={data || fakeData}
        >
          {/* Add this for horizontal lines */}
          <CartesianGrid
            strokeDasharray={0}
            strokeOpacity={0.3}
            vertical={false}
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <Bar dataKey="orders" fill={COLORS.primary} radius={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrdersBarChart;
