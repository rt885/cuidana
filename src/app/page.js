import Hero from "@/components/Home/Hero";
import StatsBanner from "@/components/Home/StatsBanner";
import HomeVideo from "@/components/Home/HomeVideo";
import Services from "@/components/Home/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Benefits from "@/components/Home/Benefits";
import HowItWorks from "@/components/Home/HowItWorks";
import InitialForm from "@/components/Home/InitialForm";

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
    </>
  );
}
