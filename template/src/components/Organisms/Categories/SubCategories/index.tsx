import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PageHeader from "@/src/components/Molecules/PageHeader";
import Text from "@/src/components/Atoms/Text";
import Button from "@/src/components/Atoms/Button";
import CardWrapper from "@/src/components/Wrappers/CardWrapper";
import SubCategory from "@/src/components/Molecules/SubCategory";
import CustomPagination from "@/src/components/Molecules/CustomPagination";
import Image from "../../../Atoms/Image";
import filter from "../../../../assets/icons/filter-lines.svg";

function SubCategoriesOrganism() {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "T-shirts",
    "Hode",
    "Shoes",
    "Category Name",
    "Category Name",
    "Category Name",
    "Category Name",
    "Category Name",
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageTitle = searchParams.get("category");

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <PageHeader childCon={styles.titleCon}>
        <div className={styles.titleCon}>
          <Text fontSize={24}>{pageTitle}</Text>
          <div className={styles.btnCon}>
            <Button
              title="Create new sub-category"
              variant="transparent-grey"
              onClick={() => navigate("/categories/add-sub-category")}
            />
            <Button
              title="Create new category"
              onClick={() => navigate("/categories/add-category")}
            />
          </div>
        </div>
      </PageHeader>
      <CardWrapper>
        <div className={styles.SubCategoriesContent}>
          <div className={styles.headerContaier}>
            <PageHeader fontSize={24} title="Sub Categories" />
            <Button
              title="Filters"
              suffix={
                <Image src={filter} alt="filter icon" width={20} height={20} />
              }
              variant="transparent-grey"
              fontSize={14}
              fontFamily="font500"
            />
          </div>

          <div className={styles.categoriesList}>
            {categories.map((item) => {
              return (
                <SubCategory
                  key={item}
                  editPath={{
                    path: "/categories/sub-categories/edit-sub-category",
                    param: { state: item },
                  }}
                  Category={item}
                />
              );
            })}
          </div>
          <div className={styles.paginationContainer}>
            <CustomPagination
              total={10}
              pageSize={3}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export default SubCategoriesOrganism;
