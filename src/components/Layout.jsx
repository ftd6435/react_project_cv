import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="container_layout">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
