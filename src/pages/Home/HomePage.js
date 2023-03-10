import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";
import { useNavigate } from "react-router-dom";

import {BinaryClock as Feature} from "./BinaryClock";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="p-10 h-screen">
            <Row justify="center" items="center">
                <div className="w-full" onClick={(e) => {navigate("/clock")}}>
                    <Feature />
                </div>
                <Column justify="center" items="center">
                    <Heading level={2}>Hello! I'm</Heading>
                    <Heading className="text-6xl">Eugenio</Heading>
                </Column>
            </Row>
        </div >
    );
}

export default HomePage;