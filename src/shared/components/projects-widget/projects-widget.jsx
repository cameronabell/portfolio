import { useState } from "react";
import { Paginator } from "primereact/paginator";
import { useProjects } from "shared/hooks/use-projects";
import { SummaryTile } from "shared";

export default function ProjectsWidget() {
    const {
        isFetching: isProjectsFetching,
        isFetched: isProjectsFetched,
        projects,
        isError: isProjectsError,
    } = useProjects();

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(6);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const currentProjects = projects?.slice(first, first + rows);

    return (
        <div className="flex flex-col gap-10">
            <h2>Projects</h2>
            {isProjectsFetching && <p>Loading projects...</p>}
            {isProjectsError && <p>Failed to fetch projects</p>}
            {isProjectsFetched && projects && (
                <>
                    <ul className="flex flex-wrap gap-10 justify-center items-stretch min-h-[31.5rem]">
                        {currentProjects.map(
                            (project) =>
                                project?.title && (
                                    <li
                                        key={project.id}
                                        className="flex max-w-[23.625rem] w-full items-stretch"
                                    >
                                        <SummaryTile
                                            title={project.title}
                                            content={project.content}
                                            slug={project.slug}
                                            featuredImage={
                                                project.featuredImageUrl
                                            }
                                        />
                                    </li>
                                )
                        )}
                    </ul>
                    <Paginator
                        first={first}
                        rows={rows}
                        totalRecords={projects.length}
                        rowsPerPageOptions={[6]}
                        onPageChange={onPageChange}
                    />
                </>
            )}
        </div>
    );
}
