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
      <p>{description}</p>
      <img src={imageUrl} alt="" />
    </Card>
  );
};

export default TestimonialCard;
