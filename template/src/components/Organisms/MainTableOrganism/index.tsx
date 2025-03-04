import { Key, useState } from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import TableHeader from "../../Molecules/TableHeader";
import CustomPagination from "../../Molecules/CustomPagination";
import styles from "./styles.module.scss";
import { MainTableOrganismProps, TableRow } from "./types";
import Image from "../../Atoms/Image";
import filter from "../../../assets/icons/filter-lines.svg";
import DatePicker from "../../Molecules/DatePicker";

function MainTableOrganism({
  headerTitle,
  headerClassName,
  showPagination = true,
  columns,
  dataSource,
  pageSize = 10,
  enableSelection = false,
  selectedRowKeys = [],
  setSelectedRowKeys,
  onSelectionChange,
  children,
  rowOnClick,
  filterBtn,
  dateBtn,
  showHeader,
}: MainTableOrganismProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = dataSource?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectionChange = (newSelectedRowKeys: Key[]) => {
    const currentPageRowKeys =
      paginatedData?.map((row) => row.key.toString()) || [];

    const newKeysSet = new Set<string>(
      selectedRowKeys.map((key) => key.toString())
    );

    newSelectedRowKeys.forEach((key) => newKeysSet.add(key.toString()));

    currentPageRowKeys.forEach((key) => {
      if (!newSelectedRowKeys.map(String).includes(key)) {
        newKeysSet.delete(key);
      }
    });

    const updatedKeys = Array.from(newKeysSet);
    setSelectedRowKeys?.(updatedKeys);
    onSelectionChange?.(updatedKeys);
  };

  const rowSelection: TableProps<TableRow>["rowSelection"] = enableSelection
    ? {
        type: "checkbox",
        selectedRowKeys: selectedRowKeys.map((key) => key.toString()),
        onChange: handleSelectionChange,
      }
    : undefined;

  return (
    <section className={styles.mainTable}>
      {showHeader && (
        <TableHeader title={headerTitle} headerClassName={headerClassName}>
          <div className={styles.headerCon}>
            {children}
            {filterBtn ? (
              <button className={styles.filterBtn}>
                <Image src={filter} alt="filter" width={20} height={20} />
                Filters
              </button>
            ) : dateBtn ? (
              <DatePicker />
            ) : null}
          </div>
        </TableHeader>
      )}

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        onRow={(record: TableRow) => ({
          onClick: () => rowOnClick?.(record),
        })}
      />
      {showPagination && (
        <div className={styles.paginationContainer}>
          <CustomPagination
            total={dataSource?.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  );
}

export default MainTableOrganism;
