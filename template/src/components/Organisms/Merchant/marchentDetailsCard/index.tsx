import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import CardWrapper from "../../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import { CardDetails } from "./types";
import Text from "@/template/src/components/Atoms/Text";
import SelectionInput from "@/template/src/components/Atoms/SelectionInput";
import Button from "@/template/src/components/Atoms/Button";

function MerchantDetailsCard({
  status,
  joinDate,
  email,
  phoneNumber,
  customerAddress,
  bio,
  commercialRegister,
  taxId,
}: CardDetails) {
  const { t } = useAutoCompleteTranslation();
  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <CardWrapper>
      <div className={styles.container}>
        <div className={styles.title}>
          <Text fontSize={16} fontFamily="font500">
            {t("Merchant Details")}
          </Text>
        </div>
        <div className={styles.detailsCon}>
          <div className={styles.details}>
            <Text fontSize={16} fontFamily="font500">
              {t("status_column")}
            </Text>

            <SelectionInput
              containerStyle={styles.selectionContainerInput}
              options={dummyOptions}
              placeholder={t("Date Published")}
              value={status}
            />
          </div>
          <div className={styles.details}>
            <Text fontSize={16} fontFamily="font500">
              {t("join_date_column")}
            </Text>

            <Text>{joinDate}</Text>
          </div>
          <div className={styles.details}>
            <Text fontSize={16} fontFamily="font500">
              {t("Email Address")}
            </Text>

            <Text>{email}</Text>
          </div>
          <div className={styles.details}>
            <Text fontSize={16} fontFamily="font500">
              {t("phone_number_label")}
            </Text>

            <Text>{phoneNumber}</Text>
          </div>
          <div className={styles.details}>
            <Text fontSize={16} fontFamily="font500">
              {t("customer_address_label")}
            </Text>

            <Text>{customerAddress}</Text>
          </div>
          <div className={styles.details}>
            <Text fontSize={16} fontFamily="font500">
              {t("Bio")}
            </Text>

            <Text>{bio}</Text>
          </div>
          <div className={styles.details}>
            <div className={styles.textCon}>
              <Text fontSize={16} fontFamily="font500">
                {t("commercial_register_label")}
              </Text>
              <Text fontSize={11} color="grey600">
                Uploaded On {commercialRegister}
              </Text>
            </div>
            <div className={styles.btnCon}>
              <Button title="view_button" />
              <Button title="Edit" variant="transparent-grey" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.textCon}>
              <Text fontSize={16} fontFamily="font500">
                {t("tax_id_label")}
              </Text>
              <Text fontSize={11} color="grey600">
                Uploaded On {taxId}
              </Text>
            </div>
            <div className={styles.btnCon}>
              <Button title="view_button" />
              <Button title="Edit" variant="transparent-grey" />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default MerchantDetailsCard;
