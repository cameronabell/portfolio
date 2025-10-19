export const PageWrapper = (props) => {
    const { children, className } = props;
    return (
        <div className="pt-36 px-4 flex justify-center">
            <div className="max-w-6xl w-full">
                <div className={className + " flex flex-col"}>{children}</div>
            </div>
        </div>
    );
}

export default PageWrapper;