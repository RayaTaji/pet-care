import Navbar from "../components/Navbar/Navbar";
import styles from "./Home.module.scss";
import cutie3 from "../assets/images/puppies.png";
import OurServices from "../components/OurServicesComponent/OurServices";

function Home() {
  return (
    <>
      <div className={styles.topContainer}>
        <img className={styles.background} src={cutie3} alt="PetCare Hero" />
        <div className={styles.navbarOnHero}>
          <Navbar />
        </div>
      </div>
      <div className={styles.container}>
        <OurServices />
        {/* <About /> */}
      </div>
    </>
  );
}

export default Home;
