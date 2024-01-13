"use client";

import TestimonialCard from "@/components/sections/testimonials/testimonial-card/TestimonialCard";
import styles from "./testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className={styles.sectionContainer}>
      <span className={styles.subtitle}>Testimonials</span>
      <h2 className={styles.title}>What our customers say</h2>
      <Swiper
        slidesPerView={2.55}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <TestimonialCard
            imageUrl="images/testimonials-section-images/Ellipse 1.png"
            description="Now, i can track my business activity with easier and have a great understandable to operate the products"
            rating="3.5"
            name="Berry Gunawan"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            imageUrl="images/Ellipse 1.png"
            description="Now, i can track my business activity with easier and have a great understandable to operate the products"
            rating="4.3"
            name="Janne Cooper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            imageUrl="images/testimonials-section-images/Ellipse 2.png"
            description="Now, i can track my business activity with easier and have a great understandable to operate the products"
            rating="4.7"
            name="Cobocannaeru"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
