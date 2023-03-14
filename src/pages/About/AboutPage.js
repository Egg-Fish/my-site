import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";

import profilePic from '../../assets/EGGFACE.jpg'
import Card from "../../components/ui/card/Card";

import revengImg from '../../assets/IDA.png';
import encaseImg from '../../assets/ENCASE.JPG';
import sccbrdImg from '../../assets/SCC_SCOREBOARD.jpg';
import ImageCard from "../../components/ui/card/ImageCard";

function AboutPage() {
    return (
        <div className="p-5 md:p-10">
            <Column justify="center">
                <Heading>About Me</Heading>

                <br />

                <section className="md:w-2/3">
                    <Row className="gap-5" justify="center">
                        <img src={profilePic} className="w-[15em] md:mr-8 rounded-full" alt="profile"/>
                        <Column justify="start">
                            <Heading level={2}>Hello! I am Eugenio, a cybersecurity student.</Heading>
                            <br />
                            <Text>
                                Currently at my final year at Ngee Ann Polytechnic, my interest for cybersecurity
                                started back in 2018 after being introduced to Kali Linux from a YouTube
                                tutorial. Continuing from this spark of interest, I took this diploma to
                                make cybersecurity my career, and it has been a great choice so far!
                            </Text>
                            <br />
                            <Text>
                                Fast-forward to today, I have learnt numerous topics such as 
                                <b> cryptography, reverse engineering, digital forensics and malware analysis. </b>

                                I even had the chance to participate in various cybersecurity competitions, such
                                as the <b>Singapore Cyber Conquest 2022</b>, <b>CDDC 2021/22</b>, and countless CTF 
                                competitions held within polytechnics around Singapore.
                            </Text>
                            <br />
                            <Text>
                                Outside of cybersecurity, I enjoy cycling, playing music, and serving the 
                                community, whether through conducting workshops for the elderly or giving
                                items to the residents door-to-door.
                            </Text>
                        </Column>
                    </Row>
                </section>
                <br />
                <br />
                <br />
                <section className="md:w-5/6">
                    <Heading className="text-center">My Skills</Heading>
                    <br />

                    <Row className="gap-5">
                        <ImageCard 
                            title="Reverse Engineering" 
                            subtitle="C / x86 Assembly" 
                            img={revengImg} 
                            imgDescription="Disassembling a malware sample using IDA Pro. This was part of my Malware Analysis module at Ngee Ann."
                        >
                            <Text>
                                My interest in low-level programming languages
                                led me to start learning C, and eventually x86
                                assembly.
                            </Text>
                            <br />
                            <Text>
                                This proved to be useful during my Malware Analysis
                                module in my course, and when solving CTF challenges.
                            </Text>
                        </ImageCard>
                        <ImageCard 
                            title="Digital Forensics" 
                            subtitle="OpenText EnCase Forensic"
                            img={encaseImg}
                            imgDescription="Using EnCase for a practical test for my
                            Digital Forensics module."
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
                                universities and IHLs across ASEAN.">
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
            </Column>
        </div>
    );
}

export default AboutPage;