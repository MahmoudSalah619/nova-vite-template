import { useNavigate } from "react-router-dom";
import Button from "../../../Atoms/Button";
import PageHeader from "../../../Molecules/PageHeader";
import CardWrapper from "../../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import SubCategory from "../../../Molecules/SubCategory";

export default function CategoriesOrganism() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, category: "Men's Clothes" },
    { id: 2, category: "Women's Clothes" },
    { id: 3, category: "Kids" },
    { id: 4, category: "Home" },
    { id: 5, category: "Category 1" },
    { id: 6, category: "Category 2" },
    { id: 7, category: "Category 3" },
    { id: 8, category: "Category 4" },
  ];

  const toSubCategories = (path: string) => {
    navigate(`/categories/sub-categories?category=${path}`);
  };

  return (
    <div className={styles.container}>
      <PageHeader title="Categories">
        <Button
          title="Create new sub-category"
          variant="transparent-grey"
          onClick={() => navigate("/categories/add-sub-category")}
        />
        <Button
          title="Create new category"
          onClick={() => navigate("/categories/add-category")}
        />
      </PageHeader>
      <CardWrapper title="Categories">
        <div className={styles.categoriesList}>
          {categories.map((item) => {
            return (
              <SubCategory
                editPath={{
                  path: "/categories/edit-category",
                  param: { state: item.category },
                }}
                Category={item.category}
                onClick={() => toSubCategories(item.category)}
              />
            );
          })}
        </div>
      </CardWrapper>
    </div>
  );
}
