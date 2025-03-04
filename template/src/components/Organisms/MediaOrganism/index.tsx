import React, { useState } from "react";
import { Upload, message } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import UploadIcon from "@/src/assets/icons/products/upload-cloud.svg";
import Image from "../../Atoms/Image";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

const { Dragger } = Upload;

function MediaOrganism() {
  const { t } = useAutoCompleteTranslation();
  // eslint-disable-next-line
  const [_, setUploadedFiles] = useState<UploadFile[]>([]);

  const uploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: (file: UploadFile) => {
      // Save the file locally in the state
      setUploadedFiles((prev) => [...prev, file]);
      message.success(`${file.name} file added successfully.`);
      return false;
    },
    onDrop(e: React.DragEvent<HTMLDivElement>) {
      console.log("Dropped files", e.dataTransfer.files);
    },

    onRemove: (file: UploadFile) => {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
      message.info(`${file.name} has been removed.`);
    },
  };

  return (
    <CardWrapper title={t("Media")}>
      <Dragger {...uploadProps} className={styles.uploadDragger}>
        <div className={styles.customIcon}>
          <Image src={UploadIcon} alt="upload icon" width={40} height={40} />
        </div>
        <div className={styles.uploadText}>
          <Text
            color="orange500"
            fontSize={14}
            fontFamily="font500"
            i18nKey="Click to upload"
          />
          <Text
            color="grey900"
            fontSize={14}
            fontFamily="font400"
            i18nKey="or drag and drop"
          />
        </div>
        <Text
          color="grey900"
          fontSize={12}
          fontFamily="font400"
          i18nKey="img_types"
        />
      </Dragger>
    </CardWrapper>
  );
}

export default MediaOrganism;
