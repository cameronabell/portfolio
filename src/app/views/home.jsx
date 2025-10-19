import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import Slider from "app/components/slider/slider";
import { BlockWrapper, LeanLeft, TriangleLeft, TriangleRight } from "shared";
import ProjectsWidget from "shared/components/projects-widget/projects-widget";
import { FaChartBar, FaCode, FaPencilRuler } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "shared";

export default function HomeView() {
    const navigate = useNavigate();
    const [portraitUrl, setPortraitUrl] = useState(undefined);

    useEffect(() => {
        const imageRef = ref(storage, "cameron-abell-portrait-md.webp");
        getDownloadURL(imageRef)
            .then((url) => {
                // The URL for the image
                console.log("Download URL:", url);

                // You can now set this URL in an <img> tag, for example:
                setPortraitUrl(url);
            })
            .catch((error) => {
                console.error("Error fetching the image URL:", error);
            });
    }, []);

    return (
        <>
            <Slider />
            <BlockWrapper>
                <section className="flex flex-col md:flex-row gap-10 justify-center">
                    <div className="flex flex-col">
                        <img
                            src={portraitUrl}
                            alt="Cameron Abell"
                            className="max-w-[31.25rem] w-full h-auto"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-1/2 pt-6">
                        <h2>Greetings! I&apos;m Cameron...</h2>
                        <p>
                            Embarking on my software engineering journey 8 years
                            ago, I’ve had the pleasure of crafting and coding
                            numerous elegantly simplistic websites tailored for
                            both personal and business purposes. I am deeply
                            committed to ongoing learning, continually pushing
                            my boundaries, and engaging in meaningful projects
                            that resonate. Fueled by a genuine passion and
                            boundless energy, I immerse myself in a diverse
                            array of interests, hobbies, academic pursuits, and
                            artistic endeavors.
                        </p>
                        <p>
                            Having graduated in 2021, I currently thrive as a
                            Senior Software Engineer at R1 RCM, while also
                            dedicating my time and skills as a volunteer
                            Software Engineer for Wilderness Louisville. I
                            remain enthusiastic and receptive to fresh, exciting
                            opportunities that come my way! Please feel free to
                            reach out via any means of communication; I’m always
                            eager to connect and explore new possibilities.
                        </p>
                        <Button
                            label="View My Resume"
                            onClick={() => navigate("/resume")}
                        />
                    </div>
                </section>
            </BlockWrapper>
            <LeanLeft flip />
            <div className="bg-ca-surface-100">
                <section className="w-full flex justify-center px-12 xl:px-28 2xl:px-48">
                    <div className="text-ca-surface-900 flex flex-col w-full justify-center items-center text-center gap-10">
                        <h2 className="text-ca-surface-900">Skills</h2>
                        <div className="flex flex-col md:flex-row w-full px-12 gap-10 xl:gap-24">
                            <div className="flex flex-col items-center w-full md:w-1/3 gap-4">
                                <FaCode className="w-12 h-12" />
                                <h3 className="text-ca-surface-900">
                                    Software Engineer
                                </h3>
                                <div className="font-semibold">
                                    Languages I&apos;ve Used:
                                </div>
                                <div className="flex flex-col items-center">
                                    C# .NET, Angular, JavaScript/TypeScript,
                                    Node.JS, HTML5, CSS/Sass, SQL, PHP, Swift
                                </div>
                                <div className="font-semibold">Dev Tools:</div>
                                <div className="flex gap-8">
                                    <div className="flex flex-col w-1/2 items-center">
                                        <div>Azure Cloud</div>
                                        <div>OpenShift/Kubernetes</div>
                                        <div>Couchbase</div>
                                        <div>Jenkins</div>
                                        <div>JFrog</div>
                                        <div>Ansible</div>
                                    </div>
                                    <div className="flex flex-col w-1/2 items-center">
                                        <div>MongoDB</div>
                                        <div>SQL Server</div>
                                        <div>GitHub</div>
                                        <div>WordPress</div>
                                        <div>Variety of WordPress</div>
                                        <div>Plugins</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full md:w-1/3 gap-4">
                                <FaPencilRuler className="w-12 h-12" />
                                <h3 className="text-ca-surface-900">
                                    Graphic Designer
                                </h3>
                                <div className="font-semibold">
                                    Things I&apos;ve Designed:
                                </div>
                                <div className="flex flex-col items-center">
                                    UX/UI, Responsive Websites, Logos, Graphics,
                                    Demo Videos, Promotional Videos
                                </div>
                                <div className="font-semibold">
                                    Design Tools:
                                </div>
                                <div className="flex flex-col items-center">
                                    <div>Adobe Creative Suite</div>
                                    <div>Affinity Designer</div>
                                    <div>Figma</div>
                                    <div>Sketch</div>
                                    <div>Davinci Resolve</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full md:w-1/3 gap-4">
                                <FaChartBar className="w-12 h-12" />
                                <h3 className="text-ca-surface-900">
                                    Systems Analyst
                                </h3>
                                <div className="font-semibold">
                                    Systems I&apos;ve Built:
                                </div>
                                <div className="flex flex-col items-center">
                                    <div>
                                        AI Assisted Revenue Cycle Management
                                    </div>
                                    <div>Employee Management</div>
                                    <div>Timecard Management</div>
                                    <div>Logistics Planning</div>
                                    <div>Transportation Management</div>
                                    <div>Calendar & Events</div>
                                </div>
                                <div className="font-semibold">
                                    Analysis Tools:
                                </div>
                                <div className="flex flex-col items-center">
                                    <div>Microsoft Visio</div>
                                    <div>LogInsight</div>
                                    <div>Grafana</div>
                                    <div>Atlassian</div>
                                    <div>Lucid</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <TriangleLeft fill="#35aec2" />
                <BlockWrapper className="bg-[#35aec2] px-4">
                    <ProjectsWidget />
                </BlockWrapper>
            </div>
            <TriangleRight fill="#35aec2" />
        </>
    );
}
