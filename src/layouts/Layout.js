import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    const location = useLocation();

    const NO_NAVBAR_LOCATIONS = ["/"]

    if (NO_NAVBAR_LOCATIONS.includes(location.pathname)) {
        return (
            <div className="w-full h-full">
                <Outlet />
            </div>
        )
    }

    return (
        <div className="w-full h-full">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;