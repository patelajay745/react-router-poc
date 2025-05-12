import Navbar from "../components/navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
