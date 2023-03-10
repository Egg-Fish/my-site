import { useState, useEffect } from "react";

function useTime(updateInterval = 1000) {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        let myInterval = setInterval(() => {
            setTime(() => {
                return Date.now()
            })
        }, updateInterval)

        return () => clearInterval(myInterval);
    }, [])

    return time;
}

export default useTime;