import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className=" bg-black text-white  w-full">
      <div className="flex gap-4 justify-end p-4 ">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "underline" : "no-underline";
          }}
        >
          <ul>Home</ul>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive ? "underline" : "no-underline";
          }}
        >
          <ul>About</ul>
        </NavLink>

        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => {
            return isActive ? "underline" : "no-underline";
          }}
        >
          <ul>Dashboard</ul>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
