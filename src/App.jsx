import { Toaster } from "react-hot-toast";
import NavBar from "./components/menu/NavBar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

const App = () => {
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
