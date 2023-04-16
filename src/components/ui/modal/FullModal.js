import { lazy, Suspense } from "react";
import Image from "../image/Image";
import Text from "../../text/Text";
import { useState } from "react";
import classNames from "classnames";


// const Modal = lazy(() => import("./Modal"));
import Modal from "./Modal";

function FullModal({src, description, toggle, onExit, children}) {
    return (
        <Suspense fallback={<div>Loading Modal...</div>}>
            <Modal toggle={toggle} onExit={onExit}>
                <div className="p-5 bg-white text-center w-[90vw] md:w-[75vw] rounded-md flex flex-col md:flex-row gap-5">
                    <div className="md:w-4/6">
                        <Image src={src} alt={description} className="w-full rounded-md aspect-[1.414] object-contain"/>
                    
                        {description ? <Text>{description}</Text> : <></>}
    
                    </div>
    
                    <div className="md:w-2/6">
                        {children}
                    </div>
                </div>
            </Modal>
        </Suspense >
    );
}

function FullModalComponent({src, description, className, children}) {
    const [toggle, setToggle] = useState(false);

    const toggleFunction = () => setToggle(prev => !prev);

    return (
        <>
            <Image src={src} alt={description} className={
                classNames("cursor-pointer aspect-[1.414] object-cover transition-all hover:shadow-xl rounded-md", className)}
                onClick={toggleFunction}/>
            <FullModal src={src} description={description} toggle={toggle} onExit={toggleFunction} children={children}/>
        </>
    );
}

export default FullModalComponent;