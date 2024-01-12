import styles from "./card.module.css";

const Card = ({ className, children }) => {
  return <div className={`${className} ${styles.card}`}>{children}</div>;
};

export default Card;
