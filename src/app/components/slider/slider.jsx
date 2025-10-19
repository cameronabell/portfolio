import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { SocialLinks, useSocials } from "shared";
import video from "../../../assets/media/slider-background-half.mp4";

export default function Slider() {
    const navigate = useNavigate();

    const {
        isFetching: isSocialsFetching,
        isFetched: isSocialsFetched,
        socials,
        isError: isSocialsError,
    } = useSocials();

    return (
        <div className="w-[100vw] h-[100vh]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={video}
                autoPlay
                loop
                muted
            />
            <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center">
                <div className="flex flex-col max-w-5xl gap-4">
                    <h1 className="text-white text-6xl drop-shadow-lg">
                        Cameron Abell
                    </h1>
                    <p className="text-2xl drop-shadow-lg">
                        Full stack Senior Software Engineer who specializes in
                        C# .Net, JavaScript & TypeScript, Angular & React.
                        Computer Info Systems graduate from the University of
                        Louisville. Follow me anywhere...
                    </p>
                    <div>
                        {isSocialsFetching && !isSocialsFetched && (
                            <div>Loading...</div>
                        )}
                        {isSocialsFetched && !socials && (
                            <div>No socials found</div>
                        )}
                        {isSocialsError && <div>Error fetching socials</div>}
                        {isSocialsFetched && socials && (
                            <SocialLinks
                                socials={socials}
                                className="text-white"
                            />
                        )}
                    </div>
                    <div>
                        <Button
                            className="text-2xl bg-transparent hover:bg-white border-solid border border-white hover:text-black py-2 px-20"
                            onClick={() => navigate("/contact")}
                        >
                            <span className="font-normal">Biz Inquires</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
