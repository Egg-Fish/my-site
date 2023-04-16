import Heading from "../../components/text/Heading";
import FullModal from "../../components/ui/modal/FullModal";

import cert from "../../assets/education/certifications/MICROSOFT_I412-6390.jpg";
import Text from "../../components/text/Text";

function CertificationsSection() {
    return (
<section className="border-2 border-gray-100 p-5 md:w-5/6 rounded-3xl shadow-xl">
<Heading level={1}>Courses & Certifications</Heading>

<br />

<div className="grid md:grid-cols-3 p-5 gap-5 bg-gray-200 rounded-xl">
    <FullModal 
        src={cert}
        description="Microsoft Certified: Power BI Data Analyst Associate"
    >
        <div className="text-justify">
            <Heading level={2}>Data Analyst Associate</Heading>
            <br />
            <Text>
                After my Data Science Fundamentals module, I had the opportunity
                to take the DA-100 Examination, fully sponsored by the school.
            </Text>
            <br />
            <Text>
                This exam was a continuation of the DSF module, which included
                preparing, modeling and visualising data using Power BI and the 
                Power Query M language.
            </Text>
            <br />
            <Text>
                Overall, going through the process of getting certified was a 
                great first experience.
            </Text>
        </div>
    </FullModal>
</div >
</section>

    );
}

export default CertificationsSection;