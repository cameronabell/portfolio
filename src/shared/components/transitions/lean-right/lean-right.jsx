export const LeanRight = ({ fill, className, flip }) => {
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
                <path d="M100 100 L0 0 L100 0 Z"></path>
            ) : (
                <path d="M100 0 L0 100 L101 100 Z"></path>
            )}
        </svg>
    );
};

export default LeanRight;