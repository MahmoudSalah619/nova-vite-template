import MessageContainer from "../../Molecules/MessageContainer";
import PageHeader from "../../Molecules/PageHeader";
import UserDetailsCard from "../User/UserDetailsCard";
import styles from "./styles.module.scss";

export default function MessageDetailsOrganism() {
  return (
    <div className={styles.container}>
      <PageHeader title="user_Name" />
      <UserDetailsCard
        joinDate="29/6/2024"
        customerAddress="18 Nozha St., Apartment 3, 1st Floor, Nasr City, Cairo, Egypt"
        email="User@ardi.com"
        phoneNumber="+20124859834"
        lastSingIn="29/6/2024 3:00PM"
      />
      <MessageContainer
        message="Hi,<br><br>I recently placed an order with your store (Order #12345) on December 18th, and it was supposed to be delivered by December 22nd. However, I haven’t received the package yet, and the tracking information hasn’t been updated since December 20th.<br><br>
Could you please help me check the status of my order? If it’s delayed, I’d like to know the estimated delivery date. Alternatively, if the item is lost, I would appreciate guidance on how to get a replacement or refund.
<br><br>
Thank you for your assistance!"
      />
    </div>
  );
}
