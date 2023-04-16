import Image from "../image/Image";
import Modal from "./Modal";
import Text from "../../text/Text";
import { useState } from "react";
import classNames from "classnames";

function ImageModal({src, description, toggle, onExit}) {
    return (
        <Modal toggle={toggle} onExit={onExit}>
            <div className="p-5 bg-white text-center w-[95vw] lg:w-auto rounded-md">
                <Image src={src} alt={description} className="w-full rounded-md lg:max-h-[80vh] object-contain"/>
                
                {description ? <><br /><Text className="text-justify">{description}</Text></> : <></>}
            </div>
        </Modal>
    );
}

function ImageModalComponent({src, description, className}) {
    const [toggle, setToggle] = useState(false);

    const toggleFunction = () => setToggle(prev => !prev);

    return (
        <>
            <Image src={src} alt={description} className={
                classNames("cursor-pointer object-cover transition-all hover:scale-105 hover:shadow-xl", className)}
                onClick={toggleFunction}/>
            <ImageModal src={src} description={description} toggle={toggle} onExit={toggleFunction}/>
        </>
    );
}

export default ImageModalComponent;