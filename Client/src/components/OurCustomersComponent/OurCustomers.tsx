import styles from "./OurCustomers.module.scss";
import Polaroid from "../Polaroid/Polaroid";
import Slider, { Settings } from "react-slick";
import Dog4 from "../../assets/images/Pets/Dog4.jpeg";
import Cat4 from "../../assets/images/Pets/Cat4.jpeg";
import Dog3 from "../../assets/images/Pets/Dog3.jpg";
import Cat3 from "../../assets/images/Pets/Cat3.png";
import Dog2 from "../../assets/images/Pets/Dog2.jpg";
import Cat2 from "../../assets/images/Pets/Cat2.jpg";
import Dog1 from "../../assets/images/Pets/Dog1.jpg";
import Cat1 from "../../assets/images/Pets/Cat1.jpg";

export default function OurCustomers() {
  const polaroids = [
    { imageUrl: Dog4, title: "Leo, 7 years old" },
    { imageUrl: Cat4, title: "Oreo, 4 years old" },
    { imageUrl: Dog1, title: "Biscuit, 11 years old" },
    { imageUrl: Cat2, title: "Pickles, 3 years old" },
    { imageUrl: Cat3, title: "Nori, 4 years old" },
    { imageUrl: Dog3, title: "Nikki, 6 months old" },
    { imageUrl: Dog2, title: "Nova, 8 months old" },
    { imageUrl: Cat1, title: "Luna Bean, 9 years old" },
  ];

  const settings: Settings = {
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
