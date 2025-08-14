import styles from "./ServiceCard.module.scss";
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}
export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={image} alt="icon desc" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
