import styles from "./styles.module.scss";
import item from "../../../assets/images/item.png";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";

function OrderItemsCard() {
  return (
    <div className={styles.ProductCardContent}>
      <div className={styles.ProductCard}>
        <Image src={item} width={100} height={100} alt="T-shirt" />
        <div className={styles.FirstLine}>
          <Text fontSize={18}>Red Basic T-Shirt</Text>
          <Text className={styles.brandName}>Brand Name</Text>
          <Text fontSize={14}>M / Red</Text>
        </div>
      </div>
      <Text>EGP : 1000 x 1 </Text>
      <Text>EGP 1,000 </Text>
    </div>
  );
}

export default OrderItemsCard;
