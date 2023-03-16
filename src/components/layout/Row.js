import classNames from "classnames";

function Row({justify, items, className, children, strict, breakpoint="md"}) {
    return (
        <div 
            className={classNames("w-full", "h-full", "flex", {
                "flex-row": strict,
                "sm:flex-row flex-col": !strict && breakpoint==="sm",
                "md:flex-row flex-col": !strict && breakpoint==="md",
                "lg:flex-row flex-col": !strict && breakpoint==="lg",
                "xl:flex-row flex-col": !strict && breakpoint==="xl",
                "2xl:flex-row flex-col": !strict && breakpoint==="2xl",
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