import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-slate-950 shadow-md rounded-b-sm dark:shadow-slate-800 bl dark:text-slate-300 font-poppins text-[1.2rem] font-semibold flex justify-around align-middle p-4 mb-0 sticky top-0 py-9">
        <NavItem />
      </nav>
    </>
  );
};

export default Navbar;
