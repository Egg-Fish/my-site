import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";
import Image from "../../components/ui/image/Image";

import profilePic from '../../assets/EGGFACE.jpg';
import flowersPic from "../../assets/FLOWERS.jpg";
import jangPic from "../../assets/jang.JPEG";
import cloudrocksPic from "../../assets/cloudrocks.jpg";
import squatPic from "../../assets/squat.jpg";
import snipPic from "../../assets/snip.jpg";

import Gallery from "./Gallery";

import { useIsMobile } from "../../hooks/useIsMobile.js";

export default function AboutMeSection() {
    return (
<section className="lg:w-2/3 border-primary border-b-4 border-t-4 text-justify">
        <br />
        <br />

        <Column className="gap-5" justify="center">
            <Column justify="start">

                
                <Gallery />
                

                <Row justify="center">
                    <Image src={profilePic} 
                        className="
                        w-1/2 lg:w-3/12
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

                <br className="lg:hidden"/>

                <Text>
                    Fast-forward to today, I have learnt numerous topics such as 
                    <b> cryptography, reverse engineering, digital forensics and malware analysis. </b>

                    I even had the chance to participate in various cybersecurity competitions, such
                    as the <b>Singapore Cyber Conquest 2022</b>, <b>CDDC 2021/22</b>, and countless CTF 
                    competitions held within polytechnics around Singapore.
                </Text>

                <br/>

                <Text>
                    Outside of cybersecurity, I enjoy cycling, playing music, and serving the 
                    community, whether through conducting workshops for the elderly or giving
                    items to the residents door-to-door.
                </Text>
            </Column>
        </Column>

        <br />
        <br />
    
</section>
);
}