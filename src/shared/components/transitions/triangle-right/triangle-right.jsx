export const TriangleRight = ({ fill, className, flip }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill={fill ?? "#d4d1d8"}
            className={className}
        >
            {flip ? (
                <path d="M-1 100 L25 2 L100 100 Z"></path>
            ) : (
                <path d="M-1 -1 L75 99 L101 -1 Z"></path>
            )}
        </svg>
    );
};

export default TriangleRight;
