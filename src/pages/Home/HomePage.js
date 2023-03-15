import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import ButtonRow from "../../components/layout/ButtonRow";
import Text from "../../components/text/Text";
import Image from "../../components/ui/image/Image.js";

import backgroundImage from "../../assets/FLOWERS.jpg";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="p-10 h-screen">
            <Row justify="center" items="center">
                <div 
                    className="w-full lg:ml-[5vw] m-10 h-full rounded-3xl" 
                    style={
                        {
                            "boxShadow": "0px 0px 30px 5px rgba(0,0,0,.75) inset",
                            "backgroundImage": `url(${backgroundImage})`,
                            "backgroundSize": "cover"
                        }
                    }>
                    {/* <Image src={flowersImg} alt="Flowers" className="rounded-3xl" /> */}
                </div>


                <Column justify="start" items="center" className="lg:justify-center m-10">
                    <div>
                        <Heading level={2}>Hello! I'm</Heading>
                        <Heading className="text-6xl">Eugenio</Heading>
                        <br />
                        <Text>A creative individual, </Text>
                        <Text>ready to serve in the cybersecurity industry</Text>
                        <Text className="text-slate-100">I make CTF challenges, too :)</Text>
                    </div>
                    <br />
                    <div>
                        <ButtonRow className="gap-2">
                            <Button onClick={() => navigate("/about")}>About Me</Button>
                            <Button onClick={() => navigate("/education")}>My Education</Button>
                        </ButtonRow>
                    </div>
                </Column>
            </Row>
        </div >
    );
}

export default HomePage;