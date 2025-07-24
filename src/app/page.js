import Hero from "../components/home/Hero";
import StatsBanner from "../components/home/StatsBanner";
import HomeVideo from "../components/home/HomeVideo";
import Services from "../components/home/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import Benefits from "../components/home/Benefits";
import HowItWorks from "../components/home/HowItWorks";
import InitialForm from "../components/home/InitialForm";
import FaQSection from "../components/home/FaQSection";
import CloseBanner from "../components/CloseBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <HomeVideo />
      <Services />
      <TestimonialSection />
      <Benefits />
      <HowItWorks />
      <InitialForm />
      <FaQSection />
      <CloseBanner />
    </>
  );
}
