export default function Initials(props) {
    const { stroke, className } = props;
    const year = new Date().getFullYear();
    
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 185 125"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeMiterlimit: 10,
            }}
            className={className}
        >
            <g>
                <g id="initials">
                    <path
                        d="M71.184,22.143c0,-0 -15.125,-50.417 -55.458,20.166c-40.334,70.584 35.291,95.796 161.333,25.209"
                        style={{
                            fill: "none",
                            fillRule: "nonzero",
                            stroke: stroke ?? "#000",
                            strokeWidth: "8.33px",
                        }}
                    />
                    <path
                        d="M88.935,122.975c0,-0 10.084,-60.5 10.084,-105.875c-0,-45.375 5.041,75.625 80.666,95.791"
                        style={{
                            fill: "none",
                            fillRule: "nonzero",
                            stroke: stroke ?? "#000",
                            strokeWidth: "8.53px",
                            strokeLinejoin: "round",
                        }}
                    />
                </g>
                {year === 2024 && (
                    <g id="24">
                        <path
                            d="M132.261,24.233c10.726,-20.663 28.558,-7.497 7.862,29.913c10.988,-3.903 20.547,-7.885 20.547,-7.885"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                        <path
                            d="M169.855,4.461l11.035,37.624"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                        <path
                            d="M160.241,7.338l1.709,17.659l19.51,-7.975"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                    </g>
                )}
                {year === 2025 && (
                    <g id="25">
                        <path
                            d="M132.261,24.233c10.726,-20.663 28.558,-7.497 7.862,29.913c10.988,-3.903 20.547,-7.885 20.547,-7.885"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                        <path
                            d="M175.075,6.635l-15.969,5.418l4.562,14.829c0,-0 12.976,-5.418 15.4,0.143c2.761,6.334 1.711,11.264 -12.12,15.256"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                    </g>
                )}
                {year === 2026 && (
                    <g id="26">
                        <path
                            d="M132.261,24.233c10.726,-20.663 28.558,-7.497 7.862,29.913c10.988,-3.903 20.547,-7.885 20.547,-7.885"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                        <path
                            d="M165.432,8.192c0,0 -11.683,37.119 8.421,33.11c11.194,-2.233 7.278,-20.201 -5.309,-16.128"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                    </g>
                )}
                {year === 2027 && (
                    <g id="27">
                        <path
                            d="M132.261,24.233c10.726,-20.663 28.558,-7.497 7.862,29.913c10.988,-3.903 20.547,-7.885 20.547,-7.885"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                        <path
                            d="M155.826,12.623l19.534,-5.275l-1.996,36.216"
                            style={{
                                fill: "none",
                                stroke: stroke ?? "#000",
                                strokeWidth: "6.97px",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        />
                    </g>
                )}
            </g>
        </svg>
    );
}
