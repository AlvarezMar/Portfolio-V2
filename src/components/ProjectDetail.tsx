import { Project } from "../utils/projects";

import ProjectTag from "./ProjectTag";
import Github from "../assets/svg/socials/github.svg?react"
import Link from "../assets/svg/elements/link.svg?react"

interface ProjectDetailProps {
    project: Project
}

function ProjectDetail({project}: ProjectDetailProps){

    return (
        <>
        <section onClick={(e) => e.stopPropagation()} className="max-w-[700px] flex flex-col rounded-xl overflow-hidden bg-background dark:bg-background_dark mt-8">
            <div>
                <img src={project.imgUrl} alt="" className="w-full h-auto max-h-[420px] object-cover object-top"/>
            </div>
            <div className="flex flex-col gap-5 px-6 py-9">
                <h1 translate="no" className="text-4xl font-extrabold">{project.title}</h1>
                <p className="text-secondary dark:text-secondary_dark">{project.previewDescription}</p>

                <hr className="mx-10 border-t-2 dark:border-hr_dark"/>

                <div className="flex flex-col gap-5 text-secondary dark:text-secondary_dark">
                    {project.fullDescription.map((paragraph) => (
                        <p>{paragraph}</p>
                    ))}
                </div>

                <div className="flex flex-wrap gap-1">
                    {project.tecnologies.map((tech) => (
                        <ProjectTag tecnologies={tech} key={tech}/>
                    ))}
                </div>

                <div className="flex flex-col mt-5 gap-1">
                    <h2 className="text-2xl font-bold mb-2">Project Links<span className="text-accent">.</span></h2>
                    <div className="flex gap-3">
                        <a href={project.repoUrl} target="_blank" className="flex place-items-center gap-2 text-nowrap bg-primary text-background p-2.5 rounded-md transition-all hover:scale-105">Source Code
                            <Github className="w-[24px] duration-0"/>
                        </a>
                        <a href={project.url} target="_blank" className={`flex place-items-center gap-2 text-nowrap p-2.5 rounded-md transition-all hover:scale-105 ${project.url ? "bg-primary text-background" : "bg-[#E5E5E5] text-[#AFAFAF] cursor-default pointer-events-none"}`}>Live Project
                            <Link className="w-[24px] duration-0"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProjectDetail;