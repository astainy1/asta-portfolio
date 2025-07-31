import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useScroll } from "../Scroll";

const MenuItems = ({ target, label, style }) => {
  const { homeRef, aboutRef, servicesRef, projectsRef, contactRef } =
    useScroll();

  const handleClick = () => {
    const refMap = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      contact: contactRef,
      projects: projectsRef,
    };

    const targetRef = refMap[target];
    targetRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <li onClick={handleClick} className={style}>
        <a>{label}</a>
      </li>

      {/* Navbar for meduim devices /ends/ */}

      {/* Menu for small devices /starts/ */}
    </>
  );
};

export default MenuItems;
