import Column from "../../components/layout/Column";
import Row from "../../components/layout/Row";
import Heading from "../../components/text/Heading";
import Text from "../../components/text/Text";

function SamplePage() {
    return (
        <section className="m-5">
            <Column justify="start" items="top">
                <Heading level={1}>Heading 1</Heading>
                <Text>Hey</Text>
    
                <Heading level={2}>Heading 2</Heading>
                <Text>Hey</Text>
    
                <Heading level={3}>Heading 3</Heading>
                <Text>Hey</Text>
    
                <Heading level={4}>(Heading 4)</Heading>
                <Text>Hey</Text>

                <br />
                
                <Row justify="around" items="center" className="gap-5">
                    <Column justify="center" className="bg-gray-300">
                        <Heading className="underline">An underlined Heading</Heading>
                    </Column>
                    <Column justify="center" className="bg-gray-300">
                        <Heading className="overline">An overlined Heading</Heading>
                    </Column>
                    <Column justify="center" className="bg-gray-300">
                        <Heading className="line-through">A line-through'ed Heading</Heading>
                    </Column>
                </Row>
    
            </Column>
        </section >
    );
}

export default SamplePage;