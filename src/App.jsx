import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { ScrollContext } from "./components/Scroll";

import NavBar from "./components/menu/NavBar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // const scrollToSection = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ScrollContext.Provider
      value={{ homeRef, aboutRef, servicesRef, projectsRef, contactRef }}
    >
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <NavBar />
      <div style={{ height: "20px" }}></div>

      <HeroSection ref={homeRef}/>
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Project ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </ScrollContext.Provider>
  );
};

export default App;
