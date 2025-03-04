interface Filter {
  key: string;
  label: string;
}

export interface FilterButtonsProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (key: string) => void;
  isGrayButtons?: boolean;
  isDateRange?: boolean;
}
