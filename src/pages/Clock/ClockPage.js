import { useEffect } from "react";
import BinaryClock from "../Home/BinaryClock";
import { useNavigate } from "react-router-dom"

function ClockPage() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen p-20" onClick={() => navigate("/")}>
            <BinaryClock />
        </div>
    );
}

export default ClockPage;