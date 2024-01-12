import styles from "./numbers.module.css";

const Numbers = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <span className={styles.NumberText}>12K+</span>
        <p className={styles.descriptionText}>Project Complete</p>
      </div>
      <div>
        <span className={styles.NumberText}>7K+</span>
        <p className={styles.descriptionText}>Happy Clients</p>
      </div>
      <div>
        <span className={styles.NumberText}>10+</span>
        <p className={styles.descriptionText}>Years Experience</p>
      </div>
      <div>
        <span className={styles.NumberText}>270+</span>
        <p className={styles.descriptionText}>Win Awards</p>
      </div>
    </section>
  );
};

export default Numbers;
