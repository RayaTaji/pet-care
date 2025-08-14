import styles from "./Polaroid.module.scss";

export interface PolaroidProps {
  imageUrl: string;
  title: string;
  tilt?: boolean;
  about?: boolean;
  withZoom?: boolean;
}
export default function Polaroid({
  imageUrl,
  title,
  tilt = true,
  about = false,
  withZoom = false,
}: PolaroidProps) {
  return (
    <div
      className={`${
        tilt ? styles.container : about ? styles.aboutTilt : styles.noTilt
      }
      ${withZoom ? styles.withZoom : ""}`}
    >
      <img src={imageUrl} alt="pet pic" />
      <h3 className={styles.titleStyle}>{title}</h3>
    </div>
  );
}
