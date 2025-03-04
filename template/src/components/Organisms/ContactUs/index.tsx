import { Select } from "antd";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import TextInput from "../../Atoms/TextInput";
import Button from "../../Atoms/Button";
import CardWrapper from "../../Wrappers/CardWrapper";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

function ContactUs() {
  const { t } = useAutoCompleteTranslation();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.container}>
      <Text
        className={styles.MainTitle}
        fontSize={30}
        i18nKey="contact_us_main_title"
      />

      <CardWrapper>
        <div className={styles.contactUs}>
          <Text
            className={styles.title}
            fontFamily="font600"
            fontSize={18}
            i18nKey="contact_us_subtitle"
          />

          <div className={styles.SelectInputContent}>
            <span className="d-block mb-2 Label100 White">
              {t("subject_label")}
            </span>
            <Select
              className={styles.SelectInput}
              style={{ width: "100%" }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </div>
          <TextInput
            type="textarea"
            label="message_label"
            containerStyle={styles.textArea}
          />
          <div className={styles.SubmitInfo}>
            <Button title="submit_button" customStyle={styles.btn} />
            <Text
              fontSize={16}
              fontFamily="font500"
              color="grey900"
              i18nKey="customer_support_info"
            />
            <Text
              fontSize={16}
              fontFamily="font400"
              color="grey900"
              i18nKey="customer_support_email"
            />
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export default ContactUs;
