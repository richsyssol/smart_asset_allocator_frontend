import React from "react";
import HeroSection from "./HeroSection";
import CTA from "./CTA";

import ServicesSection from "./AboutService";

import VideoSection from "./VideoSection";
import Testimonials from "./Testimonials";
import LogoGrid from "./LogoGrid";

import OurServices from "./OurServices";
import FAQSection from "./FAQSection";
import Blogs from "./Blogs";
import OurCorporateServices from "./OurCorporateServices";
import WhyUs from "./WhyUs";
import AwardSection from "./AwardSection";

import DepartmentSection from "./Process";
import ReviewsSection from "../Home/ReviewSection";
// import Review from "../Home/Review";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhyUs />
      <OurCorporateServices />
      <AwardSection />
      <FAQSection />

      <Blogs />

      {/* <VideoSection /> */}
      {/* <ServicesSection /> */}

      <CTA />
      {/* <Review /> */}
      <ReviewsSection />
    </div>
  );
};

export default Home;
