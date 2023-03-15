import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {

    return (
        <div className="w-full h-full">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;