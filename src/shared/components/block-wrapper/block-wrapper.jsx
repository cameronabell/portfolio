export const BlockWrapper = (props) => {
    const { children, className, innerClassName } = props;
    return (
        <div className={className + " px-4 flex justify-center"}>
            <div className="max-w-8xl w-full">
                <div className={innerClassName + " flex flex-col"}>{children}</div>
            </div>
        </div>
    );
};

export default BlockWrapper;
