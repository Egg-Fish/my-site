import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";
import Image from "../../components/ui/image/Image";
import Row from "../../components/layout/Row";
import Column from "../../components/layout/Column";

import csf01Pic from "../../assets/education/np/csf01.jpg";
import sccPic from "../../assets/education/ctfs/SCC2022.jpg";
import gctfPic from "../../assets/education/ctfs/GCTF.png";
import epicPic from "../../assets/education/np/EPIC.png";
import dlistPic from "../../assets/education/np/DLIST.png";
import standconPic from "../../assets/education/ctfs/STANDCON.png";
import cddc21Pic from "../../assets/education/ctfs/CDDC2021.jpg"
import cddc22Pic from "../../assets/education/ctfs/CDDC2022.jpg"


import FullModal from "../../components/ui/modal/FullModal";
// const FullModal = lazy(() => import("../../components/ui/modal/FullModal"));

function NgeeAnnSection() {
    return (
<section className="border-2 border-gray-100 p-5 md:w-5/6 rounded-3xl shadow-xl">

<Row className="gap-5">
    <Image src={csf01Pic} className="md:w-1/2 bg-white rounded-xl aspect-[1.414] object-cover"/>
    <Column>
        <Heading level={1}>Ngee Ann Polytechnic</Heading>
        <Heading level={3}>Diploma in Cybersecurity & Digital Forensics</Heading>
        <br />
        <Text className="text-justify">
            Being in this course has allowed me to grow in my skillset, as well 
            as my project management. Working with like-minded peers on projects
            such as penetration testing a website and performing digital forensics
            helped me to develop skillsets for both offensive and defensive
            security through experiential learning.
        </Text>
        <br />
        <Text className="text-justify">
            Apart from studies, joining my school's cybersecurity club gave me
            opportunities to build my interpersonal skills with the role of a 
            Technology Lead. I strive to make learning about cybersecurity fun and
            practical for the club members through hosting workshops and organising 
            competitions.
        </Text>

    </Column>
</Row>

<br />
<br />

<div className=" bg-gray-200 rounded-xl grid md:grid-cols-3 p-5 gap-5">
    <Heading level={2}>NullSec SIG</Heading>
    <div>

    </div>
</div>

<br />

<div className=" bg-gray-200 rounded-xl grid md:grid-cols-3 p-5 gap-5">
    <FullModal 
        src={sccPic}
        description="SCC 2022 during the Singapore International Cybersecurity Week"
    >
        <div className="text-justify">
            <Heading level={2}>Singapore Cyber Conquest 2022</Heading>
            <Heading level={4}>Team Position: 12th (Tertiary)</Heading>
            <br />
            <Text>
                I was selected to participate in the Singapore Cyber Conquest
                where we got to meet and compete against teams all across ASEAN
                in a half-day capture-the-flag competition.
            </Text>

            <br />
            <Text>
                We were exposed to Splunk, a technology that allowed us to quickly
                search log files and other structured data in a system. We had to
                use Splunk to analyse data of various systems, such as web server
                logs, Windows event logs, and data from a physical access control
                system, to hunt down a fictional APT.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={gctfPic}
        description="GTF 2021 Certificate of Award"
    >
        <div className="text-justify">
            <Heading level={2}>Gryphons CTF 2021</Heading>
            <Heading level={4}>Position: 3rd</Heading>

            <br />
            <Text>
                This competition was organised by Singapore Polytechnic's cybersecurity
                club, SP Gryphons. It was open to all polytechnic students, and I
                joined as an individual.
            </Text>

            <br />
            <Text>
                This CTF not only challenged me technically, but I learnt how to
                manage my time as a solo team - to prioritise certain challenges
                over others.
            </Text>

            <br />
            <Text>
                The challenges I found to be the best quality came from the 
                digital forensics category, which involved certain techniques that
                were new to me.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={epicPic}
        description="E.P.I.C Award"

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>NP Everyday People Inspiring Change Award 2022</Heading>
            {/* <Heading level={4}></Heading> */}
            <br />
            <Text>
                This award is given to students who go out to serve the community
                in various ways.
            </Text>

            <br />
            <Text>
                The school of has given us multiple opportunities to give back to 
                the community, such as by hosting workshops about using technology 
                for the elderly, which was what I was involved in.
            </Text>

            <br />
            <Text>
                In the end, the interactions with the elderly were wholesome and
                provided me with a different perspective on technology use and the
                importance of educating the public on cybersecurity.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={dlistPic}
        description="Director's List AY2021/2022 April Semester"

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>Director's List</Heading>
            <Heading level={4}>April 2021 Semester</Heading>

            <br />
            <Text>
                I was placed onto the Director's List during my first semester in
                Ngee Ann Polytechnic, where I had gotten a Distinction for Computing
                Mathematics
            </Text>

            <br />
            <Text>
                As a result, this motivated me for the year to come and I decided
                to take the Certificate of Advanced Computing Mathematics course
                offered by the school to prepare myself for university.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={standconPic}
        description="STANDCON Conference 2022"
    >
        <div className="text-justify">
            <Heading level={2}>STANDCON 2022</Heading>
            <br />
            <Text>
                This event was organised by Div0, a Singapore-based cybersecurity
                community, under the NOH4TS subdivision.
            </Text>

            <br />
            <Text>
                The challenges in this competition were novel and impressive for
                a volunteer-run event. This made me have a few headaches and 100s
                of tabs opened within hours 🐱‍💻
            </Text>

            <br />
            <Text>
                While not being able to secure a position, I was able to train my
                perseverance and gathered new open-source tools to use.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={cddc21Pic}
        description="CDDC 2021"
    >
        <div className="text-justify">
            <Heading level={2}>Cyber Defenders Discovery Camp CTF 2021</Heading>
            <Heading level={4}>Position: 10th (Poly/ITE/JC)</Heading>
            <br />
            <Text>
                This was my first CTF that I participated in Ngee Ann Polytechnic.
                Prior to this, I had no official CTF experience.
            </Text>

            <br />
            <Text>
                However, I had used HackTheBox and TryHackMe in the past to learn
                various tools such as Wireshark and Burpsuite. This, along with
                the skills of my teammates, led us to top 10!
            </Text>

            <br />
            <Text>
                The CTF experience is great - from staying up all night to scrolling
                endlessly on Google for answers. This sparked my new hobby of playing
                CTFs.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={cddc22Pic}
        description="CDDC 2022"
    >
        <div className="text-justify">
            <Heading level={2}>Cyber Defenders Discovery Camp CTF 2022</Heading>
            <Heading level={4}>Brainhack by DSTA</Heading>
            <br />
            <Text>
                This was the second time attending CDDC. However, the questions
                have tripled in difficulty :(
            </Text>

            <br />
            <Text>
                It was at this CTF that I felt the most defeated, but doing so
                as a team makes it worth a while. When we managed to solve a 
                "mid-tier" challenge (which at this point the university teams are
                2000 points ahead of us), we rejoiced and called it a day!
            </Text>

            <br />
            <Text>
                Overall, it was a fun challenge, and I would go for CDDC 2023.
            </Text>
            
        </div>
    </FullModal>

    {/* <FullModal 
        src={undefined}
        description=""
    >
        <div className="text-justify">
            <Heading level={2}></Heading>
            <Heading level={4}></Heading>
            <br />
            <Text>
                
            </Text>
            
        </div>
    </FullModal> */}
 
</div >
</section>
        
);
}

export default NgeeAnnSection;