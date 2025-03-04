import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import { NotificationItemProps } from "./types";
import Text from "../../Atoms/Text";

function NotificationItem({
  message,
  productName,
  imageSrc,
  isLast,
}: NotificationItemProps) {
  return (
    <div>
      <div className={styles.notificationItem}>
        <div className={styles.notificationDot} />
        <div className={styles.notificationContent}>
          <Text fontSize={16} color="dark" fontFamily="font500">
            {message}
          </Text>
          <div className={styles.productInfo}>
            <Image
              src={imageSrc}
              alt="product image"
              width={24}
              height={24}
              className={styles.productImage}
            />
            <Text fontSize={14} fontFamily="font400" color="grey900">
              {productName}
            </Text>
          </div>
        </div>
      </div>
      {!isLast && <div className={styles.divider} />}
    </div>
  );
}

export default NotificationItem;
