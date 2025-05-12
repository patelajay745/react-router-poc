import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="bg-white flex-1 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
