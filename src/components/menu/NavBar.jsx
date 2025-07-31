import NavItem from "./NavItem";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // console.log(openMenu);

  const isMenuOpen = () => setOpenMenu(true);
  const isMenuClosed = () => setOpenMenu(false);
  return (
    <>
      <nav
        data-aos="fade-down"
        data-aos-once="true"
        className="bg-white dark:bg-slate-950 shadow-md rounded-b-sm dark:shadow-slate-800 bl dark:text-slate-300 font-poppins text-[1.2rem] font-semibold flex justify-around align-middle p-4 mb-0 sticky top-0 py-9 z-[100]"
      >
        <section>
          <p className="px-5 py-2 text-2xl">
            <strong>A</strong>sta
          </p>
        </section>

        {/* Navbar for meduim devices /starts/ */}
        <section className="hidden md:flex md:justify-between md:align-middle gap-x-20">
          <ul className="hidden md:flex md:justify-center md:items-center gap-5  *:px-1 *:py-2 *:hover:border-b-2 *:hover:text-sky-50 *:cursor-pointer">
            <NavItem label="Home" target="home" />
            <NavItem label="About" target="about" />
            <NavItem label="Services" target="services" />
            <NavItem label="Projects" target="projects" />
            <NavItem
              label="Contact"
              target="contact"
              style="d-block px-5 py-2 ring-1 ring-sky-400 rounded hover:border-transparent hover:bg-sky-500 hover:text-sky-50 cursor-pointer shadow-md shadow-sky-400 hover:shadow-none"
            />
          </ul>
        </section>

        <section
          className="md:hidden transition-all ease-in duration-[0.3s] cursor-pointer rounded py-3 px-3 hover:bg-slate-200 hover:text-slate-900"
          onClick={isMenuOpen}
        >
          <FaBars />
        </section>

        {/* Menu for small devices /ends/ */}
        {openMenu && <Menu onCloseMenu={isMenuClosed} />}
      </nav>
    </>
  );
};

export default Navbar;
