import classNames from "classnames";

function Text({className, children}) {
    return (
        <div className={classNames(className, "text-lg")}>{children}</div>
    );
}

export default Text;