import { NavigateOptions } from "react-router-dom";

export interface CategoriesList {
  Category: string;
  onClick?: () => void;
  editPath: { path: string; param?: NavigateOptions };
}
