import Image from "../../Atoms/Image";
import styles from "./styles.module.scss";

function ProfileImage({ src }: { src: string }) {
  return (
    <div className={styles.imgContainer}>
      <Image
        src={src}
        alt="vector"
        width={83}
        height={83}
        className={styles.img}
      />
    </div>
  );
}

export default ProfileImage;
