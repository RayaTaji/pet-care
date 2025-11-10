import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export interface DropdownProps {
  label?: string;
  options: string[];
  placeholder?: string;
}

export default function Dropdown({
  label,
  options,
  placeholder,
}: DropdownProps) {
  const [selected, setSelected] = useState("");

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className={styles.select}
      >
        <option value="" disabled hidden>
          {placeholder || "Select an option"}
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
