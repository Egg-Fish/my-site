import classNames from "classnames";
import Heading from "../../text/Heading";
import ImageModal from "../modal/ImageModal";

export function ImageCard({img, imgDescription, title, subtitle, className, children}) {
    return (
        <div className={classNames(className, "w-full h-full flex flexbox flex-col bg-gray-200 rounded-md p-5")}>
            <ImageModal src={img} description={imgDescription} className="rounded-md aspect-[1.414]"/>
            <br />
            <div>
                <Heading level={2} className="font-bold">{title}</Heading>
                <Heading level={4}>{subtitle}</Heading>
            </div>
            
            <div>
                <br />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ImageCard;