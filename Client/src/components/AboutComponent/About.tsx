import styles from "./About.module.scss";
import banner from "../../assets/images/cutePinkPattern.png";
export default function About() {
  return (
    <div className={styles.container} id="about">
      <h1>About Us</h1>
      <img src={banner} alt="CUTE PUPPIES" />

      <div className={styles.box}>
        <p>
          At PetCare, we believe every pet deserves to look and feel their
          absolute best. Whether it's a fresh cut, a relaxing bath, or a little
          extra pampering, we're here to make every fur baby feel like a
          superstar. Our team is made up of passionate pet lovers, experienced
          groomers, and gentle hands — because we know your pet isn’t “just a
          pet,” they’re family. We’re all about safe, stress-free, and totally
          tail-wagging experiences. From shy kitties to playful pups, we make
          sure every visit is fun, calm, and full of love (and treats,
          obviously). Come visit us and see why our furry clients leave
          strutting their stuff and begging to come back. 💖
        </p>
      </div>
    </div>
  );
}
