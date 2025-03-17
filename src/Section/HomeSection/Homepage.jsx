import React from "react";
import  {HeroSection,  CardSection, BrowserSection, FeatureCars, AboutImage, HappyClientAbout, ReadBlog, EmailInquiry } from "./index";

const Homepage = () => {
  return (
    <div>
      <HeroSection /> 
      <CardSection />
      <BrowserSection />
      <FeatureCars />
      <AboutImage />
      <HappyClientAbout />
      <ReadBlog />
      <EmailInquiry />
    </div>
  );
};

export default Homepage;
