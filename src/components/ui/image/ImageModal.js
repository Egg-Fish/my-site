import Image from "./Image";
import Modal from "../modal/Modal";
import Text from "../../text/Text";
import { useState } from "react";

function ImageModal({src, description, toggle, onExit}) {
    return (
        <Modal toggle={toggle} onExit={onExit}>
            <div className="p-5 bg-white text-center w-[65vw]">
                <Image src={src} alt={description} className="w-full"/>
                <br />
                <Text>{description}</Text>
            </div>
        </Modal>
    );
}

function ImageModalComponent({src, description}) {
    const [toggle, setToggle] = useState(false);

    const toggleFunction = () => setToggle(prev => !prev);

    return (
        <>
            <div onClick={toggleFunction}>
                <Image src={src} alt={description} className="cursor-pointer max-w-[100%]"/>
            </div>
            <ImageModal src={src} description={description} toggle={toggle} onExit={toggleFunction}/>
        </>
    );
}

export default ImageModalComponent;