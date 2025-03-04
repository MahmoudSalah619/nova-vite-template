import { useState } from "react";
import { Divider } from "antd";
import CheckboxGroup from "../CheckboxGroup";
import RangeInput from "../RangeInput";
import styles from "./styles.module.scss";
import { FilterPopoverProps } from "./types";
import Button from "../../Atoms/Button";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

function FilterPopover({
  className,
  toggleDrawer = () => {},
}: FilterPopoverProps) {
  const { t } = useAutoCompleteTranslation();
  const [orderStatus, setOrderStatus] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState<string[]>([]);
  const [clearFlag, setClearFlag] = useState<boolean>(false);

  const handleConfirm = () => {
    console.log("Selected Order Status:", orderStatus);
    console.log("Selected Payment Methods:", paymentMethod);
    console.log("Selected Customer Names:", customerName);
    toggleDrawer();
  };
  const handleClearComplete = () => {
    setClearFlag(false);
  };
  const clearAllFilters = () => {
    setOrderStatus([]);
    setPaymentMethod([]);
    setCustomerName([]);
    setClearFlag(true);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <CheckboxGroup
        value={orderStatus}
        title="Order Status"
        options={[
          { label: "Select All", value: "selectAll" },
          {
            label: (
              <div className={styles.tagContainer}>
                <div className={styles.paidCircle} />
                Paid
              </div>
            ),
            value: "paid",
          },
          {
            label: (
              <div className={styles.tagContainer}>
                <div className={styles.cancelledCircle} />
                cancelled
              </div>
            ),
            value: "cancelled",
          },
          {
            label: (
              <div className={styles.tagContainer}>
                <div className={styles.inProgressCircle} />
                In Progress
              </div>
            ),
            value: "inProgress",
          },
          {
            label: (
              <div className={styles.tagContainer}>
                <div className={styles.refunded} />
                Refunded
              </div>
            ),
            value: "refunded",
          },
        ]}
        onChange={setOrderStatus}
      />

      <Divider className={styles.divider} />

      <CheckboxGroup
        value={paymentMethod}
        title="Payment Method"
        options={[
          { label: "All", value: "all" },
          { label: "Online Payment", value: "onlinePayment" },
          { label: "Cash on Delivery", value: "cashOnDelivery" },
        ]}
        onChange={setPaymentMethod}
      />

      <Divider className={styles.divider} />

      <RangeInput
        title={t("order_id_title")}
        inputClassName={styles.inputss}
        clearFlag={clearFlag}
        fromValue=""
        toValue=""
        onClearComplete={handleClearComplete}
      />

      <Divider className={styles.divider} />

      <RangeInput
        title={t("order_value_title")}
        inputClassName={styles.inputss}
        fromValue=""
        toValue=""
        clearFlag={clearFlag}
        onClearComplete={handleClearComplete}
      />

      <Divider className={styles.divider} />

      <CheckboxGroup
        value={customerName}
        title={t("customer_name_title")}
        showSearch
        options={[
          { label: "All", value: "all" },
          { label: "Mohamed", value: "mohamed" },
          { label: "Salma", value: "salma" },
        ]}
        onChange={setCustomerName}
      />

      <Divider className={styles.divider} />

      <div className={styles.buttonsContainer}>
        <Button
          variant="transparent-grey"
          title="clear_all_button"
          isFullWidth
          onClick={clearAllFilters}
        />
        <Button onClick={handleConfirm} title="done_button" isFullWidth />
      </div>
    </div>
  );
}

export default FilterPopover;
