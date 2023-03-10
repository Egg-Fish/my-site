import classNames from "classnames";

function Row({justify, items, className, children}) {
    return (
        <div 
            className={classNames(className, "w-full", "h-full", "flex md:flex-row flex-col", {
                "justify-start": justify === "start",
                "justify-end": justify === "end",
                "justify-center": justify === "center",
                "justify-between": justify === "between",
                "justify-around": justify === "around",
                "justify-evenly": justify === "evenly",
            },
            {
                "items-start": justify === "start",
                "items-end": justify === "end",
                "items-center": justify === "center",
                "items-baseline": justify === "baseline",
                "items-stretch": justify === "stretch",
            }
            )}
        >
            {children}
        </div>
    )
}

export default Row;