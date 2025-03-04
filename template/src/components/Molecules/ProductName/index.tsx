import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { ProductNameProps } from "./types";

function ProductName({ AvatarImage, text }: ProductNameProps) {
  return (
    <div className={styles.productNameCell}>
      <Image
        src={AvatarImage}
        alt={text}
        width={30}
        height={30}
        className={styles.productImage}
      />
      <Text fontSize={14} fontFamily="font400" color="dark">
        {text}
      </Text>
    </div>
  );
}

export default ProductName;
