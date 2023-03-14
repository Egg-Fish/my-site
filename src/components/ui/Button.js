import classNames from "classnames";

function Button({onClick, className, children}) {
    return (
        <div 
            className={classNames(
                className,
                "bg-secondary",
                "text-white",
                "cursor-pointer",
                "p-2",
                "rounded-md",
                "text-center",
                "place-content-center",
                "font-semibold",
                "transition-all",
                "bg-opacity-80",
                "hover:bg-opacity-100"
            )} 
            onClick={onClick}
            
        >
            {children}
        </div>
    );
}

export default Button;