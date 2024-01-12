import styles from "./partners.module.css";
import Partner1 from "@/assets/icons/Partner1";
import Partner2 from "@/assets/icons/Partner2";
import Partner3 from "@/assets/icons/Partner3";
import Partner4 from "@/assets/icons/Partner4";
import Partner5 from "@/assets/icons/Partner5";

const Partners = () => {
  return (
    <section className={styles.sectionContainer}>
      <p className={styles.text}>Trusted By</p>
      <div className={styles.partnerImages}>
        <Partner1 />
        <Partner2 />
        <Partner3 />
        <Partner4 />
        <Partner5 />
      </div>
    </section>
  );
};

export default Partners;
