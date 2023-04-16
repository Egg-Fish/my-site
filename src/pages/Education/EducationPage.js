import Column from "../../components/layout/Column";
import Heading from "../../components/text/Heading";
import CertificationsSection from "./CertificationsSection";
import NgeeAnnSection from "./NgeeAnnSection";
import XinminSection from "./XinminSection";

function EducationPage() {
    window.scrollTo({ top: 0 })
    
    return (
<div className="p-5 lg:p-10 min-h-screen">
    <Column justify="center">
        <Heading>My Education</Heading>
        
        <br />

        
        <CertificationsSection />
        
        <br />
        <br />

        <NgeeAnnSection />

        <br />
        <br />

        <XinminSection />


    </Column>
</div>
    );
}

export default EducationPage;