import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "shared";
import { useProjects } from "shared/hooks/use-projects";
import { Divider } from "primereact/divider";

export default function ProjectView() {
    const { projectSlug } = useParams();
    const [ project, setProject ] = useState(null);
    const { projects } = useProjects();

    useEffect(() => {
        if (projects) {
            const match = projects.find((p) => p.slug === projectSlug);
            setProject(match);
        }
    }, [projects, projectSlug]);

    return (
        projects &&
        project && (
            <PageWrapper className="pb-36">
                {project.featuredImageUrl && (
                    <div className="pb-10">
                        <div className="flex max-h-[31.25rem] overflow-hidden justify-center">
                            <img
                                src={project.featuredImageUrl}
                                alt={project.title}
                                className="h-auto w-auto object-contain"
                            />
                        </div>
                    </div>
                )}
                <h1 className="pb-2">{project && project.title}</h1>
                <Divider className="max-w-96" />
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                        <div
                            className="flex flex-col gap-4"
                            dangerouslySetInnerHTML={{
                                __html: project.content,
                            }}
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 gap-4">
                        {project?.categories?.length && (
                            <div className="flex flex-col gap-4 bg-ca-surface-800 p-9">
                                <h4 className="text-ca-blue-default">
                                    Categories
                                </h4>
                                {project.categories.join(", ")}
                            </div>
                        )}

                        {project?.languages?.length && (
                            <div className="flex flex-col gap-4 bg-ca-surface-800 p-9">
                                <h4 className="text-ca-blue-default">
                                    Languages
                                </h4>
                                {project.languages.join(", ")}
                            </div>
                        )}

                        {project?.implementations?.length && (
                            <div className="flex flex-col gap-4 bg-ca-surface-800 p-9">
                                <h4 className="text-ca-blue-default">
                                    Implementations Used
                                </h4>
                                {project.implementations.join(", ")}
                            </div>
                        )}

                        {project?.tools?.length && (
                            <div className="flex flex-col gap-4 bg-ca-surface-800 p-9">
                                <h4 className="text-ca-blue-default">
                                    Tools Used
                                </h4>
                                {project.tools.join(", ")}
                            </div>
                        )}

                        {project?.tags?.length && (
                            <div className="flex flex-col gap-4 bg-ca-surface-800 p-9">
                                <h4 className="text-ca-blue-default">Tags</h4>
                                {project.tags.join(", ")}
                            </div>
                        )}
                    </div>
                </div>
            </PageWrapper>
        )
    );
}
