import { useState } from "react";
import Dropdown from "../../../Dropdown/Dropdown";
import TextBox from "../../../TextBox/TextBox";
import styles from "./PetInformation.module.scss";
function PetInformation() {
  const [formData, setFormData] = useState({
    dogName: "",
    dogBreed: "",
    dogAge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(value);
  };
  return (
    <div className={styles.container}>
      <h4>Dog info</h4>
      <div className={styles.labelContainer}>
        <TextBox
          label="Dog's Name"
          name="dogName"
          placeholder="e.g: Leo"
          value={formData.dogName}
          onChange={handleChange}
        />
        <TextBox
          label="Dog's Breed"
          name="dogBreed"
          placeholder="e.g: Golden Retriever, Frenchie"
          value={formData.dogBreed}
          onChange={handleChange}
        />
      </div>
      <div className={styles.labelContainer}>
        <TextBox
          label="Dog's Age"
          name="dogAge"
          placeholder="e.g: 5 years"
          value={formData.dogAge}
          onChange={handleChange}
        />
        <Dropdown label="Matting" placeholder="No" options={["Yes", "No"]} />
      </div>
      <div className={styles.dropdownContainer}>
        {/* <Dropdown
          label="Comfortable being groomed?"
          placeholder="No"
          options={["Yes", "No"]}
        /> */}
        <Dropdown
          label="Last Groom"
          placeholder="1 - 4 Weeks Ago"
          options={[
            "1 - 4 Weeks Ago",
            "4 - 6 Weeks Ago",
            "6 - 12 Weeks Ago",
            "Not Sure",
          ]}
        />
      </div>
      <Dropdown
        label="Any Health Issues?"
        placeholder="No"
        options={["Yes", "No"]}
      />
    </div>
  );
}

export default PetInformation;
