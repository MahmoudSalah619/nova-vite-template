import { Upload, UploadFile } from "antd";
import Button from "../../Atoms/Button";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

interface DocumentUploadProps {
  title: TranslationKeyEnum;
  description: TranslationKeyEnum;
  uploadedImage: string;
  setUploadedImage: (image: string) => void;
}
const { Dragger } = Upload;

function DocumentUploader({
  title,
  description,
  uploadedImage,
  setUploadedImage,
}: DocumentUploadProps) {
  const { t } = useAutoCompleteTranslation();
  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file: UploadFile) => {
      const reader = new FileReader();
      const fileAsBlob = file as unknown as File;

      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };

      reader.onerror = () => {
        console.error("File reading failed");
      };

      reader.readAsDataURL(fileAsBlob);
      return false; // Prevent default upload behavior
    },
  };

  return (
    <div className={styles.commercialContainer}>
      <div className={styles.textContainer}>
        <Text fontSize={14} color="grey900" fontFamily="font500">
          {t(title)}
        </Text>
        <Text fontSize={11} color="grey600" fontFamily="font500">
          {t(description)}
        </Text>
      </div>
      <div className={styles.previewContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={uploadedImage}
            alt="document"
            width={100}
            height={100}
            className={styles.img}
            objectFit="contain"
          />
        </div>
        <Dragger
          {...uploadProps}
          className={`${styles.uploadDragger} ${styles.center}`}
        >
          <Button title="Edit" />
        </Dragger>
      </div>
    </div>
  );
}

export default DocumentUploader;
