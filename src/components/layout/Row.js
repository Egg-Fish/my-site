import classNames from "classnames";

function Row({justify, items, className, children, strict}) {
    return (
        <div 
            className={classNames("w-full", "h-full", "flex", {
                "flex-row": strict,
                "lg:flex-row flex-col": !strict
            }, {
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
            }, className
            )}
        >
            {children}
        </div>
    )
}

export default Row;