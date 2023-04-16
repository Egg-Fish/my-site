import Column from "../../components/layout/Column";
import Text from "../../components/text/Text";

import Gallery from "./Gallery";

export default function AboutMeSection() {
    return (
<section className="xl:w-2/3 text-justify">
        <br />
        <br />

        <Column className="gap-5" justify="center">
            <Column justify="center" items="center">

                <Gallery />

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