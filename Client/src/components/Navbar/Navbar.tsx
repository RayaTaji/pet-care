import styles from "./Navbar.module.scss";
import logo from "../../assets/logos/PetCare-Logo2.svg";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="PetCare" />
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="#our-services">Our Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Get in Touch</a>
          </li>
        </ul>
        <div className={styles.button}>
          <Button variant="secondary">Book Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
