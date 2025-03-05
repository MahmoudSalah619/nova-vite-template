import Image from "@/src/components/Atoms/Image";
import Text from "@/src/components/Atoms/Text";
import PublishedIcon from "@/src/assets/icons/products/published.svg";
import InReviewIcon from "@/src/assets/icons/products/upload-cloud.svg";
import RejectedIcon from "@/src/assets/icons/products/rejected.svg";
import InDraftIcon from "@/src/assets/icons/products/delete-icon.svg";
import ClosedIcon from "@/src/assets/icons/products/closed.svg";
import InactiveIcon from "@/src/assets/icons/products/inactive.svg";
import awaitingApp from "@/src/assets/icons/products/awaitingApp.svg";
import styles from "./styles.module.scss";
import { StatusIndicatorProps } from "./types";
import Status from "@/constants/Status";

function StatusIndicator({ status }: StatusIndicatorProps) {
  const iconMap: { [key: string]: string } = {
    [Status.PUBLISHED]: PublishedIcon,
    [Status.ACTIVE]: PublishedIcon,
    [Status.PAID]: PublishedIcon,
    [Status.IN_REVIEW]: InReviewIcon,
    [Status.REJECTED]: RejectedIcon,
    [Status.SUSPENDED]: RejectedIcon,
    [Status.EXPIRED]: RejectedIcon,
    [Status.CANCELLED]: RejectedIcon,
    [Status.IN_DRAFT]: InDraftIcon,
    [Status.CLOSED]: ClosedIcon,
    [Status.INACTIVE]: InactiveIcon,
    [Status.REFUNDED]: InactiveIcon,
    [Status.AWAITING_APPROVAL]: awaitingApp,
  };

  const statusStyleMap: { [key: string]: string } = {
    [Status.PUBLISHED]: styles.published,
    [Status.ACTIVE]: styles.published,
    [Status.PAID]: styles.published,
    [Status.IN_REVIEW]: styles.inReview,
    [Status.REJECTED]: styles.rejected,
    [Status.SUSPENDED]: styles.rejected,
    [Status.EXPIRED]: styles.rejected,
    [Status.CANCELLED]: styles.rejected,
    [Status.CLOSED]: styles.closed,
    [Status.AWAITING_APPROVAL]: styles.awaitApp,
    [Status.IN_DRAFT]: styles.inDraft,
    [Status.INACTIVE]: styles.inactive,
    [Status.REFUNDED]: styles.inactive,
  };

  return (
    <div className={`${styles.statusIndicator} ${statusStyleMap[status]}`}>
      <Image
        src={iconMap[status] || InactiveIcon}
        alt={status}
        width={12}
        height={12}
      />
      <Text fontSize={12} fontFamily="font500">
        {status}
      </Text>
    </div>
  );
}

export default StatusIndicator;
