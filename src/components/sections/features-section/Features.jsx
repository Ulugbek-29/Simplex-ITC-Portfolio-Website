import { Button } from "@/components/ui/button";
import styles from "./features.module.css";
import SingleFeatureCard from "./single-feature-card/SingleFeatureCard";

const Features = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <span className={styles.subTitle}>Features</span>
        <h2 className={styles.title}>
          <span>Giving Your Business</span> <span>Some Great Ideas</span>
        </h2>
        <p className={styles.featuresText}>
          Every designer needs the right tools to do the perfect job.
          Thankfully, we can do that. I design products that are more than
          pretty. I make them shippable and usable.
        </p>
        <Button>Contact Us</Button>
      </div>
      <div className={styles.innerParentContainer}>
        <div
          className={`${styles.innerContainer} ${styles.innerContainerLeft}`}
        >
          <SingleFeatureCard
            title="UX Experience"
            imageUrl="images/features-section-images/image 6.png"
            description="I design products that are more than pretty. I make them  usable."
          />
          <SingleFeatureCard
            title="UI Design"
            imageUrl="images/features-section-images/image 19.png"
            description="I design products that are more than pretty. I make them  usable."
          />
        </div>
        <div
          className={`${styles.innerContainer} ${styles.innerContainerRight}`}
        >
          <SingleFeatureCard
            title="Product Analysis"
            imageUrl="images/features-section-images/image 18.png"
            description="I design products that are more than pretty. I make them  usable."
          />
          <SingleFeatureCard
            title="Product Design"
            imageUrl="images/features-section-images/image 20.png"
            description="I design products that are more than pretty. I make them  usable."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
