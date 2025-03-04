import { ReactNode } from "react";

export interface CardWrapperProps {
  children: ReactNode;
  title?: string;
  className?: string;
  noHorizontalPadding?: boolean;
}
