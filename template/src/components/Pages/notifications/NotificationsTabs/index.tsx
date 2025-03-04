import { Tabs, TabsProps } from "antd";
import CardWrapper from "@/template/src/components/Wrappers/CardWrapper";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import ScheduledNotifications from "./Scheduled";
import SentNotificationsOrganism from "./Sent";

export default function NotificationsTabs() {
  const { t } = useAutoCompleteTranslation();
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("Scheduled"),
      children: <ScheduledNotifications />,
    },
    {
      key: "2",
      label: t("Sent"),
      children: <SentNotificationsOrganism />,
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
