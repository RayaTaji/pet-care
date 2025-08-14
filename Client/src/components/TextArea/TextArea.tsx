import React from "react";
import styles from "./TextArea.module.scss";
export interface TextAreaProps {
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}
export default function TextArea({
  label,
  onChange,
  placeholder,
}: TextAreaProps) {
  const [value, setValue] = React.useState("");
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.textarea}
        placeholder={placeholder}
      />
    </div>
  );
}
