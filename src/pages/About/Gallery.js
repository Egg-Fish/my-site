import classNames from "classnames";
import profilePic from '../../assets/EGGFACE.jpg';
import flowersPic from "../../assets/FLOWERS.jpg";
import jangPic from "../../assets/jang.JPEG";
import cloudrocksPic from "../../assets/cloudrocks.jpg";
import squatPic from "../../assets/squat.jpg";
import snipPic from "../../assets/snip.jpg";

import Image from "../../components/ui/image/Image";
import ImageModal from "../../components/ui/modal/ImageModal.js";
import Row from "../../components/layout/Row";
import Column from "../../components/layout/Column";

function Gallery({className}) {

    const IMG_CLASSNAMES = "object-cover grow"
    return (
        <div className={classNames(className, "hidden xl:block h-[60vh] w-full")}>
            <Column justify="center" className="gap-5">
                <div className="h-1/2">
                    <Row className="gap-5" strict>
                        <ImageModal 
                            src={jangPic} 
                            className={classNames(IMG_CLASSNAMES, "rounded-tl-3xl flex-auto")}/>
    
                        <ImageModal 
                            src={flowersPic} 
                            className={classNames(IMG_CLASSNAMES, "")}/>
    
                        <ImageModal 
                            src={squatPic} 
                            className={classNames(IMG_CLASSNAMES, "aspect-square rounded-tr-3xl")}/>
                    </Row>
                </div>
                
                <div className="h-1/2">
                    <Row className="h-1/2 gap-5" strict>
                        <ImageModal 
                            src={cloudrocksPic} 
                            className={classNames(IMG_CLASSNAMES, "rounded-bl-3xl")}/>
    
                        <ImageModal 
                            src={snipPic} 
                            className={classNames(IMG_CLASSNAMES, "rounded-br-3xl")}/>
                    </Row>
                </div>
            </Column>
        </div >
    );
}

export default Gallery;