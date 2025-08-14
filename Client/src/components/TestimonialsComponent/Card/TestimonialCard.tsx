import styles from "./TestimonialCard.module.scss";
import comment from "../../../assets/icons/comment.png";

export interface TestimonialCardProps {
  userImageUrl: string;
  userName: string;
  userTitle: string;
  testimonialText?: string;
}
export default function TestimonialCard({
  userImageUrl,
  userName,
  userTitle,
  testimonialText,
}: TestimonialCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <img className={styles.profilePicture} src={userImageUrl} alt="User" />
        <h3 className={styles.userNameText}>{userName}</h3>
        <p>{userTitle}</p>
      </div>
      <div className={styles.innerContainer}>
        <p>
          <i>{testimonialText}</i>
        </p>
        <div className={styles.commentIconBackground}>
          <img className={styles.commentIcon} src={comment} alt="comment" />
        </div>
      </div>
    </div>
  );
}
