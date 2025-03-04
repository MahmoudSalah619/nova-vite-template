import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { CategoriesList } from "./types";

function SubCategory({ Category, onClick, editPath }: CategoriesList) {
  const navigate = useNavigate();
  return (
    <div className={styles.SubCategoryLine}>
      <Text fontSize={14} fontFamily="font400" color="grey900">
        {Category}
      </Text>
      <div className={styles.buttons}>
        <Button
          variant="transparet"
          fontSize={14}
          fontFamily="font500"
          color="black"
          title="view_button"
          onClick={onClick}
        />
        <Button
          fontSize={14}
          fontFamily="font500"
          variant="transparet"
          fontColor="primaryFF"
          title="Edit"
          onClick={() => navigate(editPath.path, editPath.param)}
        />
      </div>
    </div>
  );
}

export default SubCategory;
