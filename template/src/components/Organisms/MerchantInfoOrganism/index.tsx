import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Upload, UploadFile } from "antd";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import { Auth } from "@/constants/Validation";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import CardWrapper from "../../Wrappers/CardWrapper";

const { Dragger } = Upload;

function MerchantInfoOrganism() {
  const { t } = useAutoCompleteTranslation();
  // eslint-disable-next-line
  const [_, setUploadedFiles] = useState<UploadFile[]>([]);
  const { handleSubmit, setValue } = useForm<Auth>();

  const uploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file: UploadFile) => {
      const reader = new FileReader();
      const fileAsBlob = file as unknown as File;

      reader.readAsDataURL(fileAsBlob);

      setValue("brandIcon", fileAsBlob, { shouldValidate: true }); // Validate after setting value
      return false;
    },
    onRemove: (file: UploadFile) => {
      setUploadedFiles((prev) => prev.filter((f) => f.uid !== file.uid));
      setValue("brandIcon", undefined, { shouldValidate: true }); // Reset and validate
    },
  };

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("🚀 ~ MerchantInfoOrganism ~ data:", data);
  };

  return (
    <CardWrapper
      title={t("legal_documents_title")}
      className={styles.container}
    >
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.btnContainer}>
          <div className={styles.comercialTaxContainer}>
            <div className={styles.comercialContainer}>
              <Text
                className={styles.brandText}
                i18nKey="commercial_register_label"
              />
              <Dragger
                onChange={(info) =>
                  setValue(
                    "commercialRegister",
                    info?.fileList?.[0]?.originFileObj
                  )
                }
                {...uploadProps}
                className={styles.uploadDragger}
              >
                <Button title="Upload" isFullWidth />
              </Dragger>
            </div>
            <div className={styles.comercialContainer}>
              <Text className={styles.brandText} i18nKey="tax_id_label" />
              <Dragger
                onChange={(info) =>
                  setValue("taxId", info.fileList[0]?.originFileObj)
                }
                {...uploadProps}
                className={styles.uploadDragger}
              >
                <Button title="Upload" isFullWidth />
              </Dragger>
            </div>
          </div>
        </div>
      </form>
    </CardWrapper>
  );
}

export default MerchantInfoOrganism;
