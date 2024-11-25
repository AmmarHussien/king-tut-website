// App.jsx
import HeroSection from "./Components/Hero";
import Footer from "./Components/Footer";
import ServicesPage from "./Components/Services";
import AboutUsPage from "./Components/AboutUs";
import ContactUsSection from "./Components/ContactUs";
import { useEffect, useState } from "react";
import SplashScreen from "./Components/SplashScreen";
import Roadmap from "./Components/Roadmap";

import Infographic from "./Components/Infographic";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after a delay
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen delay={3} />
      ) : (
        <>
          {" "}
          {/* <Header /> */}
          <HeroSection />
          <Roadmap />
          {/* <Roadmap2 />
          <Roadmap3 /> */}
          <Infographic />
          <ServicesPage />
          <AboutUsPage />
          <ContactUsSection />
          <Footer />{" "}
        </>
      )}
    </>
  );
};

export default App;
