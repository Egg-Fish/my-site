import { useState, useLayoutEffect } from "react";

const MOBILE_WIDTH = 768;

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    const listener = () => {
        setIsMobile(window.innerWidth < MOBILE_WIDTH);
    }

    useLayoutEffect(() => {
        setIsMobile(window.innerWidth < MOBILE_WIDTH);
        
        window.addEventListener('resize', listener)

        return () => window.removeEventListener('resize', listener)
    }, []);

    return isMobile;
}

export default useIsMobile;