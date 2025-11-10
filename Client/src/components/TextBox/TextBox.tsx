import styles from "./TextBox.module.scss";

export interface TextBoxProps {
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
}
export default function TextBox({
  label,
  placeholder,
  value,
  onChange,
  name,
}: TextBoxProps) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}
