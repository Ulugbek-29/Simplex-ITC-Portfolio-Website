import { Button } from "@/components/ui/button";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.sectionContainer}>
      <span className={styles.subTitle}>Portfolio</span>
      <div className={styles.topInnerContainer}>
        <h2 className={styles.title}>Some Of Our Best Works</h2>
        <Button>Load More</Button>
      </div>
      <div className={styles.cards}>
        <div className={styles.row1}>
          <div className={`${styles.card}`}>
            <img
              src="images/portfolio-section-images/Screenshot 2024-01-13 145100.png"
              className={styles.image1}
              alt=""
            />
          </div>
          <div className={`${styles.card} `}>
            <img
              src="images/portfolio-section-images/Rectangle 39.png"
              alt=""
            />
          </div>
          <div className={`${styles.card} `}>
            <img
              src="images/portfolio-section-images/Rectangle 43.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.card} `}>
            <img
              src="images/portfolio-section-images/Rectangle 43.png"
              alt=""
            />
          </div>
          <div className={`${styles.card} `}>
            <img
              src="images/portfolio-section-images/Rectangle 39.png"
              alt=""
            />
          </div>
          <div className={`${styles.card} `}>
            <img
              src="images/portfolio-section-images/Rectangle 38.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.row3}>
          <div className={`${styles.card} `}>
            <img
              src="images/portfolio-section-images/Rectangle 38.png"
              alt=""
            />
          </div>
          <div className={`${styles.card}`}>
            <img
              src="images/portfolio-section-images/Rectangle 39.png"
              alt=""
            />
          </div>
          <div className={`${styles.card}`}>
            <img
              src="images/portfolio-section-images/Rectangle 43.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
