import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-950 shadow-md rounded-b-sm shadow-slate-800 bl text-slate-300 font-mono font-semibold flex justify-around align-middle p-4 mb-0 sticky top-0 py-9">
        <NavItem />
      </nav>
    </>
  );
};

export default Navbar;
