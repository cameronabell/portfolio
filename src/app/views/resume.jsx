import { Divider } from "primereact/divider";
import { formatAsMonthYear, PageWrapper } from "shared";
import { Button } from "primereact/button";
import { useViews } from "shared";

export default function ResumeView() {
    const {
        isFetching,
        isFetched,
        resume,
        isError,
    } = useViews();

    if ((isFetching && !isFetched) || !resume && !isError) {
        return (
            <PageWrapper>
                <h1>Loading...</h1>
            </PageWrapper>
        );
    }

    if (isError) {
        return (
            <PageWrapper>
                <h1>Error fetching resume data</h1>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper className="pb-36 gap-10">
            <h1>Resume</h1>

            <Button>Download as PDF</Button>

            {resume.education?.length > 0 && (
                <section className="flex flex-col gap-1">
                    <h2 className="text-4xl flex align-center gap-2">Education</h2>
                    {resume.education?.map((edu) => (
                        <>
                            <div className="flex justify-between">
                                <h3 className="text-2xl">{edu.school}</h3>
                                <div>{formatAsMonthYear(edu.graduation)}</div>
                            </div>
                            <div>{edu.major}</div>
                        </>
                    ))}
                </section>
            )}

            {resume.technicalSkills && (
                <section className="flex flex-col gap-1">
                    <h2 className="text-4xl">Technical Skills</h2>
                    <div className="flex gap-2 items-center">
                        <div className="w-36">Languages</div>
                        <ul className="list-disc">
                            <li>
                                {resume.technicalSkills.languages.join(", ")}
                            </li>
                        </ul>
                    </div>
                    <Divider />
                    <div className="flex gap-2 items-center">
                        <div className="w-36">Applications</div>
                        <ul className="list-disc">
                            <li>{resume.technicalSkills.tools.join(", ")}</li>
                        </ul>
                    </div>
                    <Divider />
                    <div className="flex gap-2 items-center">
                        <div className="w-36">Technical Writing</div>
                        <ul className="list-disc">
                            {resume.technicalSkills.technicalWriting.map(
                                (item) => (
                                    <li key={item}>{item}</li>
                                )
                            )}
                        </ul>
                    </div>
                    <Divider />
                    <div className="flex gap-2 items-center">
                        <div className="w-36">Operating Systems</div>
                        <ul className="list-disc">
                            <li>
                                {resume.technicalSkills.operatingSystems.join(
                                    ", "
                                )}
                            </li>
                        </ul>
                    </div>
                </section>
            )}

            {resume.experience?.length > 0 && (
                <section className="flex flex-col gap-1">
                    <h2 className="text-4xl">Experience</h2>
                    {resume.experience?.map((exp) => (
                        <>
                            <h3 className="text-2xl">{exp.employer}</h3>
                            <div className="flex flex-col pl-8 gap-2">
                                {exp.positions?.map((pos) => (
                                    <>
                                        <div className="flex justify-between">
                                            <h4 className="text-xl">
                                                {pos.title}
                                            </h4>
                                            <div>
                                                {formatAsMonthYear(
                                                    pos.startDate
                                                ) +
                                                    " - " +
                                                    (formatAsMonthYear(
                                                        pos.endDate
                                                    ) ?? "Present")}
                                            </div>
                                        </div>
                                        <ul className="list-disc pl-12">
                                            {pos.highlights?.map(
                                                (highlight) => (
                                                    <li key={highlight}>
                                                        {highlight}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </>
                                ))}
                            </div>
                        </>
                    ))}
                </section>
            )}

            {resume.volunteering?.length > 0 && (
                <section className="flex flex-col gap-1">
                    <h2 className="text-4xl">Volunteering</h2>
                    {resume.volunteering?.map((vol) => (
                        <>
                            <div className="flex justify-between">
                                <h3 className="text-2xl">{vol.organization}</h3>
                                <div>
                                    {formatAsMonthYear(vol.startDate) +
                                        " - " +
                                        (formatAsMonthYear(vol.endDate) ??
                                            "Present")}
                                </div>
                            </div>
                            <div>{vol.position}</div>
                            <ul className="list-disc pl-12">
                                {vol.highlights?.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                        </>
                    ))}
                </section>
            )}

            {resume.certifications?.length > 0 && (
                <section className="flex flex-col gap-1">
                    <h2 className="text-4xl">Certifications</h2>
                    {resume.certifications?.map((cert) => (
                        <>
                            <div className="flex justify-between">
                                <h3 className="text-2xl">{cert.name}</h3>
                                <div>
                                    Issued {formatAsMonthYear(cert.issuedDate)}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>{cert.organization}</div>
                                <div>
                                    {cert.expirationDate ??
                                        "No Expiration Date"}
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            )}
        </PageWrapper>
    );
}
