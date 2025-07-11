import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Menu from "./Menu";
const NavItem = ({ isDark }) => {
  const [openMenu, setOpenMenu] = useState(false);
  // console.log(openMenu);


  const isMenuOpen = () => setOpenMenu(true);
  const isMenuClosed = () => setOpenMenu(false);

  return (
    <>
      <section>
        <p className="px-5 py-2 text-2xl">
          <strong>A</strong>sta
        </p>
      </section>

      {/* Navbar for meduim devices /starts/ */}

      <section className="hidden md:flex md:justify-between md:align-middle gap-x-20">
        <ul className="hidden md:flex md:justify-center md:items-center gap-5  *:px-1 *:py-2 *:hover:border-b-2 *:hover:text-sky-50 *:cursor-pointer">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#AboutMe">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
        </ul>
        <section className="hidden md:flex md:text-center  space-x-10">
          <section className=" hidden md:flex px-5 py-2 ring-1 ring-sky-400 rounded hover:border-transparent hover:bg-sky-500 hover:text-sky-50 cursor-pointer shadow-md shadow-sky-400 hover:shadow-none">
            <a href="#Contact">Contact</a>
          </section>
          {/* <section className="hidden md:flex px-5 py-2 hover:bg-sky-500 hover:text-sky-50 rounded cursor-pointer">
            {isDark ? (
              <FaSun className="md:block" />
            ) : (
              <FaMoon className="md:block" />
            )}
          </section> */}
        </section>
      </section>

      {/* Navbar for meduim devices /ends/ */}

      {/* Menu for small devices /starts/ */}

      <section
        className="md:hidden transition-all ease-in duration-[0.3s] cursor-pointer rounded py-3 px-3 hover:bg-slate-200 hover:text-slate-900"
        onClick={isMenuOpen}
      >
        <FaBars />
      </section>

      {/* Menu for small devices /ends/ */}
      {openMenu && <Menu onCloseMenu={isMenuClosed} />}

    </>
  );
};

export default NavItem;
