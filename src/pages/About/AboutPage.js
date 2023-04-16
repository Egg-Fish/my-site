import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";


import AboutMeSection from "./AboutMeSection";
import CardsSection from "./CardsSection";

function AboutPage() {
    window.scrollTo({ top: 0 })
    
    return (
<div className="p-5 lg:p-10">
    <Column justify="center">
        <Heading className="">About Me</Heading>

        <br />

        <AboutMeSection />
        
        <br />
        <br />

        <CardsSection />

        <br />
        <br />
        
    </Column>
</div>
);
}

export default AboutPage;