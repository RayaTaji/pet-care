import styles from "./Navbar.module.scss";
import logo from "../../assets/logos/PetCare-Logo2.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const navigate = useNavigate();
  return (
    <div className={styles.container} data-aos="fade-down">
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="PetCare" />
        </div>
        <ul>
          <li>
            <a
              href="#ourServices"
              onClick={(e) => handleScroll(e, "#ourServices")}
            >
              Our Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => handleScroll(e, "#testimonials")}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#ourCustomers"
              onClick={(e) => handleScroll(e, "#ourCustomers")}
            >
              Our Customers
            </a>
          </li>
          <li>
            <a
              href="#get-in-touch"
              onClick={(e) => handleScroll(e, "#get-in-touch")}
            >
              Get in Touch
            </a>
          </li>
        </ul>
        <div className={styles.button}>
          <Button variant="tertiary">Book Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
