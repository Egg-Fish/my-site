import { createPortal } from "react-dom";
import classNames from "classnames";

import './modal.css';

function Modal({children, toggle, onExit}) {
    return createPortal(
        <div className={classNames("fixed top-0 left-0 right-0 bg-[rgba(5,5,5,0.3)] w-full h-0 opacity-0 -z-50", {
            "modal-exit": !toggle,
            "modal-enter": toggle
        })}
        onClick={
            e => {
                if (e.target.id === "bg") onExit();
            }
        }>
            <div className="flex justify-center items-center h-full w-full p-10" id="bg">
                <div>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("modal-portal")
    );
}

export default Modal;