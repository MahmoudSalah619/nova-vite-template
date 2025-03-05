export default function MessageIndicator({ isRead }: { isRead: boolean }) {
  return <div>{isRead ? <div>Read</div> : <div>Unread</div>}</div>;
}
