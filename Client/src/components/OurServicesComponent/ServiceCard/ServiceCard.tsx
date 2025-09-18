import { useState } from "react";
import styles from "./ServiceCard.module.scss";
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  variant?: "small" | "regular";
}
export default function ServiceCard({
  image,
  title,
  description,
  variant = "regular",
}: ServiceCardProps) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() =>
        variant === "small" ? setIsClicked(true) : setIsClicked(false)
      }
      className={variant === "small" ? styles.smallContainer : styles.container}
    >
      <div
        className={variant === "small" ? styles.smallContent : styles.content}
      >
        <div className={variant === "small" ? styles.smallimgContainer : ""}>
          <img src={image} alt="icon desc" />
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
