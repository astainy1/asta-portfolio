import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import NavBar from "./components/menu/NavBar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <NavBar />
      <HeroSection />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
