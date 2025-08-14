import React, { useState } from "react";
import styles from "./TextBox.module.scss";

export interface TextBoxProps {
  label?: string;
  placeholder?: string;
}
export default function TextBox({ label, placeholder }: TextBoxProps) {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}
