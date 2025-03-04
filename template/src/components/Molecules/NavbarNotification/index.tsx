import { useState } from "react";
import { Popover } from "antd";
import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import NotificationIcon from "@/src/assets/icons/navbar/notification-icon.svg";
import AvatarImage from "@/src/assets/icons/navbar/avatar.svg";
import NotificationItem from "../NotificationItem";
import Text from "../../Atoms/Text";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

function NavbarNotification() {
  const { t } = useAutoCompleteTranslation();
  const notificationItems = [
    {
      message: t("product_approved_message"),
      productName: "Product Name",
      imageSrc: AvatarImage,
    },
    {
      message: t("product_rejected_message"),
      productName: "Product Name",
      imageSrc: AvatarImage,
    },
  ];

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverVisibleChange = (visible: boolean) => {
    setIsPopoverVisible(visible);
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const notificationContent = (
    <div className={styles.notificationOverlay}>
      <div className={styles.notificationHeader}>
        <Text
          color="grey900"
          fontSize={18}
          fontFamily="font500"
          i18nKey="Notifications"
        />
        <button className={styles.markAsRead}>
          <Text
            color="orange500"
            fontSize={12}
            fontFamily="font500"
            i18nKey="Mark all as read"
          />
        </button>
      </div>
      <div className={styles.notificationList}>
        {notificationItems.map((item, index) => (
          <NotificationItem
            message={item.message}
            productName={item.productName}
            imageSrc={item.imageSrc}
            isLast={index === notificationItems.length - 1}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.navbarNotificationContainer}>
      <div
        className={`${styles.hideOverlay} ${isPopoverVisible && styles.show}`}
      />

      <Popover
        content={notificationContent}
        placement="bottomRight"
        trigger="click"
        overlayClassName={styles.notificationPopover}
        open={isPopoverVisible}
        onOpenChange={handlePopoverVisibleChange}
      >
        <button className={styles.btn}>
          <Image
            src={NotificationIcon}
            alt="notification icon"
            width={23.3}
            height={26.67}
            className={styles.notificationIcon}
          />
        </button>
      </Popover>

      <Image src={AvatarImage} alt="profile image" width={40} height={40} />
    </div>
  );
}

export default NavbarNotification;
