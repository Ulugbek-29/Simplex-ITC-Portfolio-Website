import Hero from "@/components/sections/hero-section/Hero";
import Navbar from "@/components/layout/navbar/Navbar";
import TestimonialCard from "@/components/sections/testimonials/testimonial-card/TestimonialCard";
import Partners from "@/components/sections/partners-section/Partners";
import Features from "@/components/sections/features-section/Features";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <TestimonialCard
        imageUrl="images/Ellipse 1.png"
        description="Now, i can track my business activity with easier and have a great understandable to operate the products"
      />
    </div>
  );
};

export default Home;
