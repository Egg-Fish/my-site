import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import Column from "../components/layout/Column";
import classNames from "classnames"

function Navbar () {
    const location = useLocation();

    // console.log(location.pathname);

    const BUTTON_CLASSNAMES = classNames("fi p-3 rounded-l-xl lg:hover:pr-8")

    return createPortal(
<div className="
    fixed 
    top-2/3
        lg:top-10
    right-0
    ">
    <Column className="gap-y-11 text-3xl text-white" justify="end">
        <Link to="/">
                <i className={classNames("fi-bs-home", BUTTON_CLASSNAMES, {
                    "bg-primary": location.pathname === "/",
                    "bg-secondary": location.pathname !== "/"
                })}></i>
        </Link>
        <Link to="/about">
                <i className={classNames("fi-bs-user", BUTTON_CLASSNAMES, {
                    "bg-primary": location.pathname === "/about",
                    "bg-secondary ": location.pathname !== "/about"
                })}></i>
        </Link>
        <Link to="/education">
                <i className={classNames("fi-rs-school", BUTTON_CLASSNAMES, {
                    "bg-primary": location.pathname === "/education",
                    "bg-secondary": location.pathname !== "/education"
                })}></i>
        </Link>
    </Column>
</div>,
    document.getElementById("sidebar-portal")
);
}

export default Navbar;