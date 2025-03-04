import Icon from "../../Atoms/Icon";

export default function MessageIndicator({ isRead }: { isRead: boolean }) {
  return (
    <div>
      <Icon
        name={!isRead ? "message" : "read"}
        size={20}
        color={!isRead ? "orange" : "black"}
      />
    </div>
  );
}
