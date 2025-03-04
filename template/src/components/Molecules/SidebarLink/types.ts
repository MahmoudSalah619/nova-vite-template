export interface SidebarLinkProps {
  icon: string;
  label: string;
  isActive?: boolean;
  className?: string;
  href: string;
  onClick?: () => void;
}
