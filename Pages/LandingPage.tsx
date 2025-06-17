import Features from "../Components/LandingPageComponents/Features";
import GetStarted from "../Components/LandingPageComponents/GetStarted";
import Hero from "../Components/LandingPageComponents/Hero";
import Pricing from "../Components/LandingPageComponents/Pricing";
import Testimonials from "../Components/LandingPageComponents/Testimonials";
import FAQ from "../Components/LandingPageComponents/FAQ";
import NavBar from "../Components/NavBar";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <GetStarted />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
};

export default LandingPage;
