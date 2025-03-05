import { useState } from "react";
import { Upload, UploadFile } from "antd";
import RichTextEditor from "../../Molecules/RichTextEditor";
import TextInput from "../../Atoms/TextInput";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import ProfileImage from "../../Molecules/ProfileImage";
import vector from "@/src/assets/images/vector.png";
import Text from "../../Atoms/Text";
import LegalDocuments from "../../Molecules/LegalDocuments";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

const { Dragger } = Upload;

function BrandProfileInfoOrganism() {
  const { t } = useAutoCompleteTranslation();
  const [imageSrc, setImageSrc] = useState<string>(vector); // State for uploaded image URL

  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file: UploadFile) => {
      const reader = new FileReader();
      const fileAsBlob = file as unknown as File;

      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(fileAsBlob);

      return false;
    },
  };

  return (
    <div className={styles.container}>
      <CardWrapper title={t("General Info")}>
        <div className={styles.inputsHolder}>
          <div className={styles.profileContainer}>
            <ProfileImage src={imageSrc || vector} />

            <Dragger
              {...uploadProps}
              className={`${styles.uploadDragger} ${styles.center}`}
            >
              <Text
                fontSize={12}
                fontFamily="font500"
                color="primaryFF"
                i18nKey="Edit Photo"
              />
            </Dragger>
          </div>

          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Shop Name"
          />
          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Email Address"
          />

          <RichTextEditor
            containerStyle={styles.inputContainer}
            label={t("Bio")}
          />
        </div>
      </CardWrapper>

      <CardWrapper>
        <LegalDocuments />
      </CardWrapper>
    </div>
  );
}

export default BrandProfileInfoOrganism;
