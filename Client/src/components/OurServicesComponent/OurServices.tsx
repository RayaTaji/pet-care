import styles from "./OurServices.module.scss";
import ServiceCard from "./ServiceCard/ServiceCard";
import grooming from "../../assets/icons/grooming.png";
import bathing from "../../assets/icons/bathing.png";
import deworming from "../../assets/icons/deworming.png";
import nailTrimming from "../../assets/icons/trimming.png";
import earCleaning from "../../assets/icons/ear-cleaning.png";
import teethBrushing from "../../assets/icons/teeth-cleaning.png";
import spaMassage from "../../assets/icons/spa.png";
import ticks from "../../assets/icons/ticks.png";

export default function OurServices() {
  return (
    <div id={"ourServices"} className={styles.container}>
      <h1>What We Do (for Your Best Friend)</h1>
      <div className={styles.cardContainer}>
        <ServiceCard
          image={grooming}
          title={"Grooming"}
          description="Full coat trimming, styling, and brushing to keep your dog looking fresh and fabulous."
        />
        <ServiceCard
          image={bathing}
          title={"Bathing"}
          description="Gentle, deep-clean baths with dog-safe shampoos. Goodbye stinky fur, hello silky softness."
        />
        <ServiceCard
          image={deworming}
          title={"Deworming"}
          description="Keep your furry friend healthy from the inside out. Quick, safe, and vet-approved."
        />
        <ServiceCard
          image={nailTrimming}
          title={"Nail Trimming"}
          description="Smooth, safe nail trims so you can avoid scratches and keep your dog comfy."
        />
        <ServiceCard
          image={earCleaning}
          title={"Ear Cleaning"}
          description="Gentle ear clean-ups to prevent infections and keep your dog’s ears fresh and happy."
        />
        <ServiceCard
          image={teethBrushing}
          title={"Teeth Cleaning"}
          description="Fresh breath and healthy teeth! Say yes to extra kisses without the stinky aftermath."
        />
        <ServiceCard
          image={spaMassage}
          title={"Spa & Massage"}
          description="A luxurious, calming massage to help your dog relax and feel totally spoiled."
        />
        <ServiceCard
          image={ticks}
          title={"Flea & Tick Treatment"}
          description="Effective treatments to keep those annoying pests away and your dog itch-free.
"
        />
      </div>
    </div>
  );
}
