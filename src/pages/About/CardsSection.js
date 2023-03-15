import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";


import revengImg from '../../assets/IDA.png';
import encaseImg from '../../assets/ENCASE.JPG';
import sccbrdImg from '../../assets/SCC_SCOREBOARD.jpg';
import ImageCard from "../../components/ui/card/ImageCard";


export default function CardsSection() {
    return (
<section className="lg:w-5/6 text-justify">
    <Heading className="text-center">My Skills</Heading>

    <br />
    <br />

    <Row className="gap-5">

        
        <ImageCard 
            title="Reverse Engineering" 
            subtitle="C / x86 Assembly" 
            img={revengImg} 
            imgDescription="Disassembling a malware sample using IDA Pro. 
            This was part of my Malware Analysis module at Ngee Ann."
            className="shadow-xl"
        >
            <Text>
                My interest in low-level programming languages
                led me to start learning C, and eventually x86
                assembly.
            </Text>
            <br />
            <Text>
                This proved to be useful during my Malware Analysis
                module in my course, and when solving CTF challenges
                on binary exploitation (PWN).
            </Text>
        </ImageCard>


        <ImageCard 
            title="Digital Forensics" 
            subtitle="OpenText EnCase Forensic"
            img={encaseImg}
            imgDescription="Using EnCase during a practical test 
            for my Digital Forensics module."
            className="shadow-xl"
        >
            <Text>
                After my Digital Forensics module, I learnt how
                to examine disk images of Windows machines using
                EnCase.
            </Text>
            <br />
            <Text>
                As part of the final assignment, I dealt with
                memory forensics and concepts such as YARA scans,
                NTFS MFT records, and web browser sqlite databases.
            </Text>
        </ImageCard>


        <ImageCard 
            title="CTF Competitions" 
            subtitle={<i>PVCUREF NAQ ZNGU</i>}
            img={sccbrdImg}
            imgDescription="
                The final scoreboard for the Singapore Cyber 
                Conquest 2022. My team came in 12th place amongst 
                universities and IHLs across ASEAN."
            className="shadow-xl"
        >
            <Text>
                Capture-the-flag competitions allow me to test out my
                technical skills against others to gauge my progress.
            </Text>
            <br />
            <Text>
                Apart from participating, I also love to make CTF
                challenges for competitions such as the annual Interpoly 
                CTF in topics such as Reverse Engineering and Web.
            </Text>
        </ImageCard>


    </Row>


</section>
);
}