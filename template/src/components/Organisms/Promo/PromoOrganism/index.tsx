import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import StatusIndicator from "../../../Molecules/StatusIndicator";
// import DateTimeDisplay from "../../../Molecules/DateTimeDisplay";
import Status from "@/constants/Status";
import PageHeader from "../../../Molecules/PageHeader";
import Button from "../../../Atoms/Button";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Text from "@/src/components/Atoms/Text";
import SearchFilterBarForPromo from "@/src/components/Molecules/SearchFilterForPromo";
import ActionIndicator from "@/src/components/Molecules/ActionBtnForPromo";

export default function PromoOrganism() {
  const { t } = useAutoCompleteTranslation();
  const navigate = useNavigate();

  const columns = [
    {
      title: t("Offer Name"),
      dataIndex: "offerName",
      key: "offerName",
    },
    {
      title: t("start_date"),
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: t("end_date"),
      dataIndex: "endDate",
      key: "endDate",
      // render: () => <DateTimeDisplay date="May 30 ,2024 12:00PM" />,
    },
    {
      title: t("status_column"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => <StatusIndicator status={status} />,
    },
    {
      title: t("usage"),
      dataIndex: "usage",
      key: "usage",
    },
    {
      title: t("Revenue"),
      dataIndex: "Revenue",
      key: "Revenue",
    },
    {
      title: t("actions_column"),
      dataIndex: "actions",
      key: "actions",
      render: (status: string) => <ActionIndicator status={status} />,
    },
  ];

  const allData = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    offerName: `Offer Name`,
    category: "Men, Hoodies",
    usage: "1234",
    Revenue: "EGP 1234",
    startDate: "May 20 ,2024 12:00PM",
    endDate: "May 20 ,2024 12:00PM",
    actions: i % 5 === 0 ? "Enabled" : i % 5 === 1 ? "Enabled" : "Disabled",
    status:
      i % 5 === 0
        ? Status.EXPIRED
        : i % 5 === 1
          ? Status.INACTIVE
          : Status.ACTIVE,
  }));

  return (
    <section className={styles.container}>
      <PageHeader title="Promos">
        <Button
          title="Create promo code"
          onClick={() => navigate("add-promo")}
        />
      </PageHeader>

      <SearchFilterBarForPromo />

      <MainTableOrganism
        showHeader
        columns={columns}
        dataSource={allData}
        headerClassName={styles.headerContainer}
        filterBtn
      >
        <Text fontSize={22}>Promo Codes</Text>
      </MainTableOrganism>
    </section>
  );
}
