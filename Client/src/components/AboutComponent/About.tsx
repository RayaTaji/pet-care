import styles from "./About.module.scss";
import testPic from "../../assets/images/birthdaygurl.jpg";
import Polaroid from "../Polaroid/Polaroid";
export default function About() {
  return (
    <div className={styles.container} id="about">
      <h1>A Place Where Pets Feel at Home</h1>

      <div className={styles.bannerContainer}>
        <Polaroid about={true} imageUrl={testPic} title={"Lola, 4 years old"} />
        <div className={styles.textContainer}>
          <p>
            At <span>PetCare</span>, we believe every pet deserves to look and
            feel their absolute best. <br /> <br />
            Whether it's a fresh cut, a relaxing bath, or a little extra
            pampering, we're here to make every fur baby feel a superstar.{" "}
            <br /> <br /> Our team is made up of passionate, experienced
            groomers with gentle hands — because we know your dog isn’t “just a
            dog,” they’re family. We’re all about stress-free, and totally
            tail-wagging experiences. From shy seniors to playful pups, we make
            sure every visit is fun, calm, and full of love (and treats,
            obviously). <br /> <br /> Come visit us and see why our furry
            clients leave strutting their stuff and begging to come back. 💖
          </p>
        </div>
      </div>
    </div>
  );
}
