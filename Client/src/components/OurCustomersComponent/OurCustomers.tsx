import styles from "./OurCustomers.module.scss";
import Polaroid from "../Polaroid/Polaroid";
import Slider from "react-slick";
import Dog4 from "../../assets/images/Pets/Dog4.jpeg";
import Dog6 from "../../assets/images/Pets/Dog6.jpeg";
import Dog3 from "../../assets/images/Pets/Dog3.jpg";
import Dog7 from "../../assets/images/Pets/Dog7.jpeg";
import Dog2 from "../../assets/images/Pets/Dog2.jpg";
import Dog5 from "../../assets/images/Pets/Dog5.jpeg";
import Dog1 from "../../assets/images/Pets/Dog1.jpg";
import Dog8 from "../../assets/images/Pets/Dog8.jpeg";
import type { Settings as SettingsType } from "react-slick";

export default function OurCustomers() {
  const polaroids = [
    { imageUrl: Dog4, title: "Leo, 7 years old" },
    { imageUrl: Dog7, title: "Nori, 4 years old" },
    { imageUrl: Dog8, title: "Luna Bean, 9 years old" },
    { imageUrl: Dog6, title: "Oreo, 4 years old" },
    { imageUrl: Dog1, title: "Biscuit, 11 years old" },
    { imageUrl: Dog3, title: "Nikki, 6 months old" },
    { imageUrl: Dog5, title: "Pickles, 3 months old" },
    { imageUrl: Dog2, title: "Nova, 8 months old" },
  ];

  const settings: SettingsType = {
    dots: true,
    infinite: true,
    speed: 1050,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1750,
    pauseOnHover: true,
  };

  return (
    <div className={styles.container} id="ourCustomers">
      <h1>Our Cutest Customers</h1>
      <div className={styles.polaroidContainer}>
        <Slider {...settings}>
          {polaroids.map((p, i) => {
            return (
              <Polaroid
                key={i}
                imageUrl={p.imageUrl}
                title={p.title}
                tilt={false}
                withZoom={true}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
