import { useState } from "react";
import styles from "./styles.module.scss";
import legalDoc from "@/src/assets/images/legalDoc.png";
import DocumentUploader from "../DocumentUploader";
import CardWrapper from "../../Wrappers/CardWrapper";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function LegalDocuments() {
  const [documents, setDocuments] = useState([
    {
      title: "Commercial Register" as TranslationKeyEnum,
      description: "Uploaded on 13/9/2024 11:50PM" as TranslationKeyEnum,
      uploadedImage: legalDoc,
    },
    {
      title: "tax_id_label" as TranslationKeyEnum,
      description: "Uploaded on 13/9/2024 11:50PM" as TranslationKeyEnum,
      uploadedImage: legalDoc,
    },
  ]);

  const handleImageChange = (index: number, newImage: string) => {
    setDocuments((prev) =>
      prev.map((doc, idx) =>
        idx === index ? { ...doc, uploadedImage: newImage } : doc
      )
    );
  };

  return (
    <CardWrapper title="Legal Documents">
      <div className={styles.infoContainer}>
        {documents.map((doc, index) => (
          <DocumentUploader
            key={doc.title}
            title={doc.title}
            description={doc.description}
            uploadedImage={doc.uploadedImage}
            setUploadedImage={(image: string) =>
              handleImageChange(index, image)
            }
          />
        ))}
      </div>
    </CardWrapper>
  );
}

export default LegalDocuments;
