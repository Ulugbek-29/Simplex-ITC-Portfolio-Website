import styles from "./singleFeatureCard.module.css";
import FeaturesCard from "@/components/ui/features-card/FeaturesCard";

const SingleFeatureCard = ({ className, description, imageUrl, title }) => {
  return (
    <FeaturesCard className={`${className} ${styles.singleCard}`}>
      <img src={imageUrl} alt="" className={styles.featurePhoto} />
      <h3 className={styles.titleText}>{title}</h3>
      <p className={styles.text}>{description}</p>
    </FeaturesCard>
  );
};

export default SingleFeatureCard;
