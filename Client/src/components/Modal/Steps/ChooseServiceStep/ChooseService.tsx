import styles from "./ChooseService.module.scss";
import ServiceCard from "../../../OurServicesComponent/ServiceCard/ServiceCard";
import grooming from "../../../../assets/icons/grooming.png";
import bathing from "../../../../assets/icons/bathing.png";
import deworming from "../../../../assets/icons/deworming.png";
import nailTrimming from "../../../../assets/icons/trimming.png";
import earCleaning from "../../../../assets/icons/ear-cleaning.png";
import teethBrushing from "../../../../assets/icons/teeth-cleaning.png";
import spaMassage from "../../../../assets/icons/spa.png";
import ticks from "../../../../assets/icons/ticks.png";

function ChooseService() {
  return (
    <div className={styles.container}>
      <h4>Select your services</h4>
      <div className={styles.cardContainer}>
        <ServiceCard
          image={grooming}
          title={"Grooming"}
          variant="small"
          description="Full coat trimming, styling, and brushing to keep your dog looking fresh and fabulous."
        />
        <ServiceCard
          image={bathing}
          title={"Bathing"}
          variant="small"
          description="Gentle, deep-clean baths with dog-safe shampoos. Goodbye stinky fur, hello silky softness."
        />
        <ServiceCard
          image={deworming}
          title={"Deworming"}
          variant="small"
          description="Keep your furry friend healthy from the inside out. Quick, safe, and vet-approved."
        />
        <ServiceCard
          image={nailTrimming}
          title={"Nail Trimming"}
          variant="small"
          description="Smooth, safe nail trims so you can avoid scratches and keep your dog comfy."
        />
      </div>
      <div className={styles.cardContainer}>
        <ServiceCard
          image={earCleaning}
          title={"Ear Cleaning"}
          variant="small"
          description="Gentle ear clean-ups to prevent infections and keep your dog’s ears fresh and happy."
        />
        <ServiceCard
          image={teethBrushing}
          title={"Teeth Cleaning"}
          variant="small"
          description="Fresh breath and healthy teeth! Say yes to extra kisses without the stinky aftermath."
        />
        <ServiceCard
          image={spaMassage}
          title={"Spa & Massage"}
          variant="small"
          description="A luxurious, calming massage to help your dog relax and feel totally spoiled."
        />
        <ServiceCard
          image={ticks}
          title={"Flea & Tick Treatment"}
          variant="small"
          description="Effective treatments to keep those annoying pests away and your dog itch-free.
"
        />
      </div>
    </div>
  );
}

export default ChooseService;
