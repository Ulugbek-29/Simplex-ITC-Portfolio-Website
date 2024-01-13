import styles from "./button.module.css";
const Button = ({ children, className }) => {
  return (
    <div className={styles.uiButtonContainer}>
      {className === "customized" ? (
        <button
          type="button"
          className={styles.uiButton}
          style={{ color: "#000", backgroundColor: "#fff" }}
        >
          {children}
        </button>
      ) : (
        <button type="button" className={styles.uiButton}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
