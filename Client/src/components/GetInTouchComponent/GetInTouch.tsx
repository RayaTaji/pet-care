import styles from "./GetInTouch.module.scss";
import GetInTouchForm from "./GetInTouchForm/GetInTouchForm";
import CleanDog from "../../assets/images/CleanDog.png";

export default function GetInTouch() {
  return (
    <div className={styles.container} id="get-in-touch">
      <h1>Get in Touch</h1>
      <div className={styles.topContainer}>
        <GetInTouchForm />
        <img src={CleanDog} alt="cleanest doggo" className={styles.image} />
      </div>
      <div className={styles.orContainer}>
        <div className={styles.horizontalDivider} />
        <h3>OR</h3>
        <div className={styles.horizontalDivider} />
      </div>
      <div className={styles.bottomContainer}>
        <h1>Pay us a Visit</h1>
        <div className={styles.mapContainer}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27079.09398151137!2d35.910181!3d31.963969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca076b4d54ad1%3A0xfbc09d08e0771e30!2sAbdali%20Hospital!5e0!3m2!1sen!2sjo!4v1755172383881!5m2!1sen!2sjo"
            style={{
              border: "0",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
