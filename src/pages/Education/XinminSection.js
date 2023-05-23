import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";
import Image from "../../components/ui/image/Image";
import Row from "../../components/layout/Row";
import Column from "../../components/layout/Column";

import FullModal from "../../components/ui/modal/FullModal";

import amcPic from "../../assets/education/olympiads/AMC.png";
import ycepPic from "../../assets/education/xmss/YCEP.png";
import nusPic from "../../assets/education/xmss/NUSSTATS.png";
import smoPic from "../../assets/education/olympiads/SMO.png";
import sjpoPic from "../../assets/education/olympiads/SJPO.png";
import sciencePic from "../../assets/education/xmss/SCIENCE.png";
import stemPic from "../../assets/education/xmss/STEM.png";

import xmssPic from "../../assets/education/xmss/XMSS.jpeg";

function XinminSection() {
    return (
<section className="border-2 border-gray-100 p-5 md:w-5/6 rounded-3xl shadow-xl">

<Row className="gap-5">
    <Image src={xmssPic} className="md:w-1/2 bg-white rounded-xl aspect-[1.414] object-cover"/>
    <Column>
        <Heading level={1}>Xinmin Secondary School</Heading>
        <Heading level={3}>GCE O Level Certificate</Heading>
        <br />
        <Text className="text-justify">
            I saw rapid self-development during my secondary school days, gaining
            confidence in my leadership skills and technical skills in computing.

            Through numerous leadership workshops and camps, I learnt to be 
            resilient and adaptable to change. I practiced these skills as a
            Section Leader in my CCA, leading a small team for a year and a half.
        </Text>
        <br />
        <Text className="text-justify">
            As COVID-19 struck during my graduating year, I encountered a new set
            of challenges, like most of us have. As much as I dislike the timing,
            it taught me the importance of adaptability and patience as we embarked
            on home-based learning for the first time.
        </Text>
        <br />
        <Text className="text-justify">
            I was able to take Computing as an O Level subject where I learnt
            the basics of computer architecture, python programming, and
            simple networking. It was here that I developed my passion for
            cybersecurity and learnt about its need for more professionals.
        </Text>

    </Column>
</Row>

<br />

<div className=" bg-gray-200 rounded-xl grid md:grid-cols-3 p-5 gap-5">
    <FullModal 
        src={amcPic}
        description="AMC 2019 Credit"

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>Australian Mathematics Competition 2019</Heading>
            <Heading level={4}>Certificate of Credit</Heading>
            <br />
            <Text>
                I took this competition when I was in Secondary 3.
            </Text>

            <br />
            <Text>
                It was a privilege and a joy to participate in this AMC. All the
                time spent preparing for it made me enjoy mathematics (which is 
                a hard thing to say as a student) when the stress of grades aren't
                present.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={ycepPic}
        description="YCEP 2019"
    >
        <div className="text-justify">
            <Heading level={2}>Youth Cyber Exploration Programme</Heading>
            <Heading level={4}>Ngee Ann Polytechnic</Heading>
            <br />
            <Text>
                YCEP aims to engage youths who aspire to become
                cybersecurity professionals.
            </Text>

            <br />
            <Text>
                This is where I was introduced to the option of taking cybersecurity
                as a career option. I was able to quickly catch on to certain topics
                such as basic ciphers and encodings, python scripting, and even
                had a chance to use Kali Linux to run an EternalBlue exploit on
                virtual machines.
            </Text>

            <br />
            <Text>
                After joining NullSec in Ngee Ann, I was involved in planning 
                YCEP 2022!
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={nusPic}
        description="NUS Statistics Competition 2019"

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>Statistics Competition 2019</Heading>
            <Heading level={4}>National University of Singapore</Heading>
            <br />
            <Text>
                I was selected, along with 3 other teammates, to represent my
                school for the NUS Statistics Competition. The objective was to
                write a paper about any topic, using statistics to prove a point.
            </Text>

            <br />
            <Text>
                My team did a paper about the difference between private and
                public universities in terms of different factors, based on
                data from graduate surveys.
            </Text>

            <br />
            <Text>
                As I have never done a proper report before, with all the proper
                citations and formatting, it was a good experience which helped
                me during my polytechnic studies.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={smoPic}
        description="SMO 2019"

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>Singapore Mathematics Olympiad 2019</Heading>
            <Heading level={4}>Senior Section (Secondary 3)</Heading>
            <br />
            <Text>
                This was the most challenging olympiad I've ever participated in.
                It is humbling to see prodigies use this as a practice paper.
            </Text>

            <br />
            <Text>
                In preparation, my school had supplementary lessons from a coach
                to train us. His proficiency and heuristics were something that blew
                my mind.
            </Text>

            <br />
            <Text>
                While many of my peers found it just as hard, we had a good time
                struggling together and spurring one another on until the olympiad
                itself - Even though we felt like walking into an inevitable doom!
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={sjpoPic}
        description="SJPO 2019"

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>Singapore Junior Physics Olympiad 2019</Heading>
            <Heading level={4}>Honourable Mention</Heading>
            <br />
            <Text>
                Along with mathematics, physics is a subject that I excelled in.
                After hearing about the SJPO, I signed up to find out how much I
                really knew. 
            </Text>

            <br />
            <Text>
                This olympiad helped me to view physics as not just a secondary
                school subject that I had to do, and instead as part of science
                that anyone can be interested in and study.
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={sciencePic}
        description=""

        className="object-top hover:object-center"
    >
        <div className="text-justify">
            <Heading level={2}>Top in Science</Heading>
            <Heading level={4}>Secondary 1 Cohort 2017</Heading>
            <br />
            <Text>
                To me, science was about exploring things that you are interested
                in. If you took a snapshot of my primary school life, you'd see
                me watching videos on random topics like how things work or 
                two animals fighting one another.
            </Text>

            <br />
            <Text>
                I'm glad to have carried over this curiosity into secondary
                school, and getting this award in my first year of school. It 
                got me looking forward to doing well in school. 
            </Text>
            
        </div>
    </FullModal>

    <FullModal 
        src={stemPic}
        description="Robotics Competition"
    >
        <div className="text-justify">
            <Heading level={2}>STEM @ Central Singapore 2017</Heading>
            <Heading level={4}>Robotics Competition</Heading>
            <br />
            <Text>
                During this competition, me and a group of classmates were tasked
                to create a robot that transforms from one figure to another - It
                was a competition of both technicality and creativity.
            </Text>

            <br />
            <Text>
                After attending the provided workshops, we assembled a robot that 
                turns from a box into Yoshi from Super Mario.
            </Text>

            <br />
            <Text>
                Overall, I learnt basic python scripting and debugging, and how 
                to assemble the robot, which was based on a Raspberry Pi.
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
</div>
    
</section>

    );
}

export default XinminSection;