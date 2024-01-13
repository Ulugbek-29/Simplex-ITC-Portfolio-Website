import Hero from "@/components/sections/hero-section/Hero";
import Navbar from "@/components/layout/navbar/Navbar";
import Partners from "@/components/sections/partners-section/Partners";
import Features from "@/components/sections/features-section/Features";
import Numbers from "@/components/sections/numbers-section/Numbers";
import Portfolio from "@/components/sections/portfolio-section/Portfolio";
import News from "@/components/sections/news-section/News";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Numbers />
      <Portfolio />
      <News />
      <Testimonials />
    </div>
  );
};

export default Home;
