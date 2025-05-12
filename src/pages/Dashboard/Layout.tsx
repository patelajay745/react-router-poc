import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="flex h-screen">
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
              to={"setting"}
              className={({ isActive }) =>
                isActive ? "underline" : "no-underline"
              }
            >
              <ul>Setting</ul>
            </NavLink>
          </nav>
        </div>
        <div className="bg-white flex-1 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
