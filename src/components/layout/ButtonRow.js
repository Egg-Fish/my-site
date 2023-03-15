import classNames from "classnames";

function ButtonRow({justify, items, className, children}) {
    let nChildren = children.length;

    let styles = {
        "gridTemplateColumns": `repeat(${nChildren}, minmax(0, 1fr))`
    }

    return (
        <div 
            style={styles}
            className={classNames(className, "w-full", "h-full", "grid grid-flow-col",
            {
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

export default ButtonRow;