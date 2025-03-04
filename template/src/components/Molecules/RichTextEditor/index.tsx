import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";

interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  containerStyle?: string;
}

function RichTextEditor({
  value = "",
  onChange,
  label,
  containerStyle,
}: RichTextEditorProps) {
  const [editorValue, setEditorValue] = useState(value);

  const handleChange = (content: string) => {
    setEditorValue(content);
    if (onChange) onChange(content);
  };

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      {!!label && (
        <Text color="grey900" fontFamily="font500" fontSize={14}>
          {label}
        </Text>
      )}
      {/* <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        className={styles.editor}
      /> */}
    </div>
  );
}

export default RichTextEditor;
