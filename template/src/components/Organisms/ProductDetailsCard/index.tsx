import { useNavigate } from "react-router-dom";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import item from "../../../assets/images/item.png";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { CardDetails } from "./types";

function ProductDetailsCard({ title, price, status, date }: CardDetails) {
  const navigate = useNavigate();

  const handleNavigateToEditProduct = () => {
    navigate("/products/edit-product");
  };

  return (
    <CardWrapper className={styles.container}>
      <Image src={item} width={120} height={120} alt="T-shirt" />
      <div className={styles.contentContainer}>
        <div className={styles.titleBtnContainer}>
          <Text>{title}</Text>
          <Button
            onClick={handleNavigateToEditProduct}
            title="Edit Product"
            customStyle={styles.BorderBtn}
          />
        </div>
        <div className={styles.content}>
          <Text>Price: EGP {price}</Text>
          <Text>Status: {status}</Text>
          <Text>Date Created: {date}</Text>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProductDetailsCard;
