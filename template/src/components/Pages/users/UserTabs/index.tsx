import { Tabs, TabsProps } from "antd";
import CardWrapper from "@/template/src/components/Wrappers/CardWrapper";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import UserProducts from "./UserProducts";
import UserOrders from "./UserOrders";

export default function UserTabs() {
  const { t } = useAutoCompleteTranslation();
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("Orders"),
      children: <UserOrders hasOrders />,
    },
    {
      key: "2",
      label: t("Favorite Items"),
      children: <UserProducts hasProducts />,
    },
  ];
  return (
    <CardWrapper>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="twoTabs"
      />
    </CardWrapper>
  );
}
