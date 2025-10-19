import { useNavigate } from "react-router-dom";
import Initials from "shared/svgs/initials";
import { Divider } from "primereact/divider";

export default function Logo() {
    const navigate = useNavigate();

    return (
        <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate("/")}
        >
            <Initials stroke="#fff" className="w-20 transition-transform ease-in-out duration-300 scale-75 md:scale-100" />
            <Divider layout="vertical" className="logo-divider" />
            <div className="flex flex-col text-nowrap">
                <span className="text-white select-none font-light tracking-wide text-2xl md:text-4xl leading-none">
                    Cameron Abell
                </span>
                <span className="uppercase text-xs md:text-lg leading-snug">
                    Software Engineer III
                </span>
            </div>
        </div>
    );
}
