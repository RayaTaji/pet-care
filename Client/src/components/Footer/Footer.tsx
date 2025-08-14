import styles from "./Footer.module.scss";
import logo from "../../assets/logos/PetCare-Logo.svg";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <img style={{ width: "100%", height: "100%" }} src={logo} alt="logo" /> */}
      </div>
      <div className={styles.footerFooter}>
        © 2023 PetCare. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
