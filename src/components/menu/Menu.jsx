import { FaTimes } from "react-icons/fa";

const Menu = ({ onCloseMenu }) => {
  const styles = {
    mainStyle:
      "md:hidden z-5 fixed h-[100vh] bg-slate-700 p-6 top-0 right-0 w-[50%] z-50",
  };

  return (
    <>
      <menu   data-aos="fade-down"
  data-aos-once="true" className={` ${styles.mainStyle}`}>
        <section className="text-right ">
          <span
            className="hover:bg-sky-200/15 cursor-pointer rounded px-3 py-3 transition-all duration-[0.3s] ease-in hover:text-slate-300"
            onClick={onCloseMenu}
          >
            <FaTimes className="inline" />
          </span>
        </section>

        <ul className="*:px-5 *:py-2 *:hover:bg-sky-600 *:hover:text-sky-50 *:hover:rounded *:cursor-pointer *:w-[100%] *:transition-all *:ease-in *:duration-[0.2s] mt-10 flex flex-col justify-center gap-5 text-center text-xl">
          <li onClick={onCloseMenu}>
            <a href="#">Home</a>
          </li>
          <li onClick={onCloseMenu}>
            <a href="#AboutMe">About</a>
          </li>
          <li onClick={onCloseMenu}>
            <a href="#Projects">Projects</a>
          </li>
          <li onClick={onCloseMenu}>
            <a href="#Services">Services</a>
          </li>
          <li onClick={onCloseMenu}>
            <a href="#Projects">Prjects</a>
          </li>
        </ul>
      </menu>
    </>
  );
};

export default Menu;
