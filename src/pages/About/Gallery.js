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
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";

function Gallery({className}) {

    const IMG_CLASSNAMES = "object-cover grow"
    return (
        <div className={classNames(className, "xl:h-[60vh] xl:mb-16 w-full")}>
            <Column justify="center" className="gap-5">
                <div className="h-1/3 hidden xl:block ">
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

                <div className="h-full xl:h-1/3 xl:m-5">
                    <Row justify="center" breakpoint="md">
                        <Image src={profilePic} 
                            className="
                            w-2/3 xl:w-2/12
                            lg:mr-20
                            m-10
                            rounded-3xl
                            shadow-2xl
                            " />
                        <div>
                            <Heading level={2}>Hello! I am Eugenio, a cybersecurity student.</Heading>
                            <br />
                            <Text>
                                Currently at my final year at Ngee Ann Polytechnic, my interest for cybersecurity
                                started back in 2018 after being introduced to Kali Linux from a YouTube
                                tutorial. Continuing from this spark of interest, I took this diploma to
                                make cybersecurity my career, and it has been a great choice so far!
                            </Text>
                        </div>
                    </Row>
                </div>
                
                <div className="h-1/3 hidden xl:block ">
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