import CardWrapper from "../../Wrappers/CardWrapper";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import styles from "./styles.module.scss";

export default function UserMessage() {
  const phoneNumber = "+1234567890";

  const recipient = "example@example.com";
  const subject = "Hello from React App";
  const body = "This is a test email sent from a React application.";
  return (
    <CardWrapper>
      <Text fontSize={20} fontFamily="font600">
        Message
      </Text>
      <Text fontFamily="font400" fontSize={16}>
        Hi
      </Text>
      <Text fontFamily="font400" fontSize={16} lineHeight={1.5}>
        I recently placed an order with your store (Order #12345) on December
        18th, and it was supposed to be delivered by December 22nd. However, I
        haven’t received the package yet, and the tracking information hasn’t
        been updated since December 20th.
      </Text>
      <Text fontFamily="font400" fontSize={16} lineHeight={1.5}>
        Could you please help me check the status of my order? If it’s delayed,
        I’d like to know the estimated delivery date. Alternatively, if the item
        is lost, I would appreciate guidance on how to get a replacement or
        refund.
      </Text>
      <Text fontFamily="font400" fontSize={16} lineHeight={1.5}>
        Thank you for your assistance!
      </Text>
      <div className={styles.btns}>
        <a href={`tel:${phoneNumber}`}>
          <Button
            title="Call User"
            variant="transparet"
            fontFamily="font500"
            customStyle={styles.callBtn}
          />
        </a>
        <a
          href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        >
          <Button title="Reply using e-mail" variant="primary" />
        </a>
      </div>
    </CardWrapper>
  );
}
