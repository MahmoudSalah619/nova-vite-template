import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import styles from "./styles.module.scss";
import Text from "@/template/src/components/Atoms/Text";
import SelectionInput from "@/template/src/components/Atoms/SelectionInput";
import { CardDetails } from "./types";
import CardWrapper from "../../../Wrappers/CardWrapper";

function UserDetailsCard({
  status,
  joinDate,
  email,
  phoneNumber,
  customerAddress,
  lastSingIn,
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
            {t("User Details")}
          </Text>
        </div>
        <div className={styles.detailsCon}>
          {status && (
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
          )}
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
              {t("last_sing_in")}
            </Text>

            <Text>{lastSingIn}</Text>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default UserDetailsCard;
