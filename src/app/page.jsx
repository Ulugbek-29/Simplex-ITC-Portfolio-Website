import Hero from "@/components/sections/hero-section/Hero";
import Navbar from "@/components/layout/navbar/Navbar";
import TestimonialCard from "@/components/sections/testimonials/testimonial-card/TestimonialCard";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <TestimonialCard
        imageUrl="images/Ellipse 1.png"
        description="Now, i can track my business activity with easier and have a great understandable to operate the products"
      />
    </div>
  );
};

export default Home;
