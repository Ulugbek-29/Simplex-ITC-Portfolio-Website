import styles from "./news.module.css";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionContainer}>
        <span className={styles.subtitle}>Latest Blogs</span>
        <div className={styles.topInnerContainer}>
          <h2 className={styles.title}>Check Some of Latest News & Articles</h2>
          <Button className="customized">Load More</Button>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.image}>image</div>
            <div className={styles.content}>
              <span>UI Design | 22 May 2023</span>
              <h2>What is UI Design in Front End Design?</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system
              </p>
              <a href="/">Read more</a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>image</div>
            <div className={styles.content}>
              {" "}
              <span>UI Design | 22 May 2023</span>
              <h2>What is UI Design in Front End Design?</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system
              </p>
              <a href="/">Read more</a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>image</div>
            <div className={styles.content}>
              {" "}
              <span>UI Design | 22 May 2023</span>
              <h2>What is UI Design in Front End Design?</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system
              </p>
              <a href="/">Read more</a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>image</div>
            <div className={styles.content}>
              {" "}
              <span>UI Design | 22 May 2023</span>
              <h2>What is UI Design in Front End Design?</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system
              </p>
              <a href="/">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
