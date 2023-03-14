import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import ButtonRow from "../../components/layout/ButtonRow";
import Text from "../../components/text/Text";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="p-10 h-screen">
            <Row justify="center" items="center">
                <div className="w-full md:w-1/3 h-1/3 cursor-pointer md:ml-[10vw]">
                    hi
                </div>
                <Column justify="center" items="center">
                    <div>
                        <Heading level={2}>Hello! I'm</Heading>
                        <Heading className="text-6xl">Eugenio</Heading>
                        <br />
                        <Text>A creative individual, </Text>
                        <Text>ready to serve in the cybersecurity industry (with flair)</Text>
                    </div>
                    <br />
                    <div>
                        <ButtonRow className="gap-2">
                            <Button onClick={() => navigate("/about")}>About Me</Button>
                            <Button oncClick={() => navigate("/clock")}>My Education</Button>
                        </ButtonRow>
                    </div>
                </Column>
            </Row>
        </div >
    );
}

export default HomePage;