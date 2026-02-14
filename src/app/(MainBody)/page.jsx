"use client";
import { useEffect } from "react";
import Header from "../../containers/common/header";
import BannerSection from "../../containers/layouts/sections/portfolio/banner";
import AboutSection from "../../containers/layouts/sections/portfolio/about";
import SkillsSection from "../../containers/layouts/sections/portfolio/skills";
import ExperienceSection from "../../containers/layouts/sections/portfolio/experience";
import CounterSection from "../../containers/layouts/sections/portfolio/counter";
import DigitalGrowthSection from "../../containers/layouts/sections/portfolio/digital-growth";
import WorkingWithMeSection from "../../containers/layouts/sections/portfolio/working-with-me";
import ContactSection from "../../containers/layouts/sections/portfolio/contact";
import FooterSection from "../../containers/layouts/sections/portfolio/footer";

const Portfolio = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#1f232c");
    document.body.style.setProperty("--secondary", "#676767");
    document.body.style.setProperty("--light", "#000");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <div>
      <Header className="dark" />
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CounterSection />
      <DigitalGrowthSection />
      <WorkingWithMeSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;
