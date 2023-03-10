function Heading({level, className, children}) {
    if (!level) level = 1;

    switch (level) {
        case 1:
            className += " text-4xl font-bold";
            break;

        case 2:
            className += " text-3xl";
            break;
        
        case 3:
            className += " text-2xl";
            break;

        case 4:
            className += " text-xl";
            break;
    
        default:
            className += " text-base";
            break;
    }
    return (
        <div className={className}>{children}</div>
    );
}

export default Heading;