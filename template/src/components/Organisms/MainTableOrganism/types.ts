import { ReactNode } from "react";

export interface TableRow {
  [key: string]: string;
}

export interface TableColumn {
  title: string | ReactNode;
  dataIndex: string;
  key: string;
  render?: (text: string, record: TableRow) => ReactNode;
}

export interface MainTableOrganismProps {
  headerTitle?: string;
  headerClassName?: string;
  showPagination?: boolean;
  columns: TableColumn[];
  dataSource: TableRow[];
  pageSize?: number;
  children?: ReactNode;
  rowOnClick?: (record: TableRow) => void;
  enableSelection?: boolean;
  selectedRowKeys?: string[];
  setSelectedRowKeys?: (key: string[]) => void;
  filterBtn?: boolean;
  dateBtn?: boolean;
  onSelectionChange?: (selectedKeys: string[]) => void;
  showHeader: boolean;
}

export interface CustomPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
