import Card from "@/components/ui/card/Card";
import styles from "./testimonial-card.module.css";
import Quotation from "@/assets/icons/Quotation";

const TestimonialCard = ({
  className,
  description,
  imageUrl,
  name,
  rating,
}) => {
  return (
    <Card className={`${className} ${styles.testimonialCard}`}>
      <Quotation />
      <p className={styles.description}>{description}</p>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapperLeft}>
          <img src={imageUrl} alt="" />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.innerWrapperRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFB23F"
              stroke="#FFB23F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className={styles.rating}>{rating}</span>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
