import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import ArrowLeft from "@/src/assets/icons/home/arrow-left.svg";
import ArrowRight from "@/src/assets/icons/home/arrow-right.svg";
import styles from "./styles.module.scss";
import { CustomPaginationProps } from "../../Organisms/MainTableOrganism/types";
import i18n from "@/template/i18n";

function CustomPagination({
  total,
  pageSize,
  currentPage,
  onPageChange,
}: CustomPaginationProps) {
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <a className={styles.btnPrev}>
          <Image
            src={i18n.dir() === "ltr" ? ArrowRight : ArrowLeft}
            alt="arrow left"
            width={20}
            height={20}
          />
          <Text
            fontFamily="font500"
            fontSize={14}
            color="grey900"
            i18nKey="Previous"
          />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className={styles.btnNext}>
          <Text
            fontFamily="font500"
            fontSize={14}
            color="grey900"
            i18nKey="Next"
          />
          <Image
            src={i18n.dir() === "ltr" ? ArrowLeft : ArrowRight}
            alt="arrow right"
            width={20}
            height={20}
          />
        </a>
      );
    }
    return originalElement;
  };

  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      current={currentPage}
      onChange={onPageChange}
      itemRender={itemRender}
      className={styles.pagination}
    />
  );
}

export default CustomPagination;
