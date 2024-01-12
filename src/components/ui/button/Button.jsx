import styles from "./button.module.css";
const Button = ({ children }) => {
  return (
    <div className={styles.uiButtonContainer}>
      <button type="button" className={styles.uiButton}>
        {children}
      </button>
    </div>
  );
};

export default Button;
