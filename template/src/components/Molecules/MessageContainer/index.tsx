import Button from "../../Atoms/Button";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";

export default function MessageContainer({ message }: { message: string }) {
  return (
    <CardWrapper title="Message">
      <p
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
      <div className={styles.btnCon}>
        <Button title="Call User" variant="transparent-grey" />
        <Button title="Reply using e-mail" onClick={() => {}} />
      </div>
    </CardWrapper>
  );
}
