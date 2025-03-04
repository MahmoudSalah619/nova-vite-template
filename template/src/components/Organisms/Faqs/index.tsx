import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import CardWrapper from "../../Wrappers/CardWrapper";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

function Faqss() {
  const { t } = useAutoCompleteTranslation();

  const text = t("faq_ans");

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <Text fontSize={18}>{t("faq_quest")}</Text>,
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: <Text fontSize={18}>{t("faq_quest")}</Text>,
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: <Text fontSize={18}>{t("faq_quest")}</Text>,
      children: <p>{text}</p>,
    },
  ];

  return (
    <CardWrapper>
      <Text fontSize={36} fontFamily="font500">
        {t("Frequently Asked Questions")}
      </Text>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        className={styles.Collapse}
        items={items}
      />
    </CardWrapper>
  );
}

export default Faqss;
