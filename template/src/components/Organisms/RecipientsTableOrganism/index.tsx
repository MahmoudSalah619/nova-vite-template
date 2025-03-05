import { useState } from "react";
import { Input, Radio, RadioChangeEvent } from "antd";
import FilterOrganism from "../FilterOrganism";
import MainTableOrganism from "../MainTableOrganism";
import styles from "./styles.module.scss";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import Image from "../../Atoms/Image";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function RecipientsTableOrganism() {
  const { t } = useAutoCompleteTranslation();
  const [radioValue, setRadioValue] = useState<number | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const columns = [
    {
      title: t("user_name_column"),
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: t("Email Address"),
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: t("phone_number_label"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: t("total_orders_column"),
      dataIndex: "totalOrders",
      key: "totalOrders",
    },
    {
      title: t("join_date_column"),
      dataIndex: "joinDate",
      key: "joinDate",
    },
  ];

  const data = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    userName: `User Name ${i + 1}`,
    emailAddress: "User@gmail.com",
    phoneNumber: "+20123483948",
    totalOrders: "100",
    joinDate: "Mar 1, 2024",
  }));

  const handleRadioChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setRadioValue(value);

    if (value === 1) {
      const allKeys = data.map((row) => row.key);
      setSelectedRowKeys(allKeys);
    } else if (value === 2) {
      if (selectedRowKeys.length === 0) {
        setRadioValue(null);
      }
    } else {
      setSelectedRowKeys([]);
    }
  };

  const handleSelectionChange = (selectedKeys: string[]) => {
    setSelectedRowKeys(selectedKeys);

    if (selectedKeys.length === data.length) {
      setRadioValue(1);
    } else if (selectedKeys.length > 0) {
      setRadioValue(2);
    } else {
      setRadioValue(null);
    }
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle={t("Recipients")}
      columns={columns}
      dataSource={data}
      headerClassName={styles.headerContainer}
      enableSelection
      selectedRowKeys={selectedRowKeys}
      setSelectedRowKeys={setSelectedRowKeys}
      onSelectionChange={handleSelectionChange}
    >
      <div className={styles.tableContainer}>
        <Radio.Group
          className={styles.radioGroup}
          onChange={handleRadioChange}
          value={radioValue}
        >
          <Radio value={1}>{t("radio_all_users")}</Radio>
          <Radio value={2}>
            {t("radio_selected_users")} ({selectedRowKeys.length}
            {t("Selected")})
          </Radio>
        </Radio.Group>

        <div className={styles.searchContainer}>
          <Input
            prefix={
              <Image
                src={SearchIcon}
                alt="search icon"
                width={20}
                height={20}
              />
            }
            placeholder={t("type_to_search_placeholder")}
            className={styles.searchInput}
          />

          <FilterOrganism />
        </div>
      </div>
    </MainTableOrganism>
  );
}

export default RecipientsTableOrganism;
