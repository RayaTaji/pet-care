import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";
import cutie3 from "../../assets/images/puppies.png";
import OurServices from "../../components/OurServicesComponent/OurServices";
import About from "../../components/AboutComponent/About";
import Testimonials from "../../components/TestimonialsComponent/Testimonials";
import OurCustomers from "../../components/OurCustomersComponent/OurCustomers";
import GetInTouch from "../../components/GetInTouchComponent/GetInTouch";
import BackToTop from "../../components/BackToTop/BackToTop";

function Home() {
  return (
    <>
      <div className={styles.topContainer}>
        <img className={styles.background} src={cutie3} alt="PetCare Hero" />
        <div className={styles.navbarOnHero}>
          <Navbar />
        </div>
        <div className={styles.heroText}>
          <h1 style={{ fontWeight: 700 }}>
            Make Your Pet Look and Feel Fabulous
          </h1>
        </div>
      </div>
      <div className={styles.container}>
        <OurServices />
        <About />
        <Testimonials />
        <OurCustomers />
        <GetInTouch />
        <BackToTop />
      </div>
    </>
  );
}

export default Home;
