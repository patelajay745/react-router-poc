import { NavLink } from "react-router";

function Sidebar() {
  return (
    <div className="bg-gray-200 text-black w-52">
      <nav className="p-2 gap-3 text-xl flex flex-col ">
        <NavLink
          to={"."}
          end
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          <ul>Home</ul>
        </NavLink>
        <NavLink
          to={"overview"}
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          <ul>Overview</ul>
        </NavLink>
        <NavLink
          to={`user/5`}
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          <ul>Profile</ul>
        </NavLink>

        <NavLink
          to={"setting"}
          className={({ isActive }) =>
            isActive ? "underline" : "no-underline"
          }
        >
          <ul>Setting</ul>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
