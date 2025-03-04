import styles from "./styles.module.scss";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { ProductNotFoundItems } from "./types";

function ProductNotFound({ title, description, image }: ProductNotFoundItems) {
  return (
    <div className={styles.NotFoundContent}>
      <Image src={image} alt="hallow" width={100} height={100} />
      <Text className={styles.boldText}>{title}</Text>
      <Text>{description}</Text>
      <Button title="Add Product" />
    </div>
  );
}

export default ProductNotFound;
