import styles from "./featuresCard.module.css";

const FeaturesCard = ({ className, children }) => {
  return <div className={`${className} ${styles.card}`}>{children}</div>;
};

export default FeaturesCard;
