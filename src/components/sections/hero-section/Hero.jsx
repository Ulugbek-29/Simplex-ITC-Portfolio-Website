import { Button } from "@/components/ui/button";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div>
        <h1 className={styles.heroName}>
          <span className={styles.heroFirstName}>Miami</span>{" "}
          <span className={styles.heroLastName}>walke</span>
          <span className={styles.heroLastLetter}>r</span>
        </h1>
        <p className={styles.heroText}>
          Award Winning product designer based in Georgia. We create
          user-friendly interfaces for fast-growing startups.
        </p>
        <Button>Book A Call</Button>
      </div>
      <div>
        <img src="\images\hero.png"></img>
      </div>
    </section>
  );
};

export default Hero;
