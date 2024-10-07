import ProjectTag from "./ProjectTag";

import Code from "../assets/svg/elements/code.svg?react"
import Link from "../assets/svg/elements/link.svg?react"

import { Project } from "../utils/projects";

interface ProjectCardProps {
    project: Project;
    onOpenModal: (project: Project) => void;
}

function ProjectCard({project, onOpenModal}: ProjectCardProps){
    
    return (
        <>
        <div className="grid grid-cols-[2fr_1fr] gap-6 border-[3px] rounded-lg border-container dark:border-container_dark p-9 w-[60rem]">

            <div className="flex flex-col gap-3 pt-5">
                <h3 translate="no" className="text-3xl font-semibold transition-colors duration-75">{project.title}</h3>
      
                <h3 className="mx-2 mb-3 duration-75">{project.description}</h3>

                <div className="flex gap-1">
                    {project.tecnologies.map((tech) => (
                        <ProjectTag tecnologies={tech} key={tech}/>
                    ))}
                </div>

                <span onClick={() => onOpenModal(project)} className="text-accent hover:underline mb-0 mt-auto cursor-pointer">Discover more &#11166;</span>
            </div>

            <div className="w-[22rem] relative">
                <img src={project.imgUrl} alt="" onClick={() => onOpenModal(project)} className="rounded-lg w-full h-auto object-cover object-top max-h-[244px] cursor-pointer"/>

                <div className="flex flex-col gap-2 absolute right-0 bottom-0 bg-background dark:bg-background_dark pt-2 pl-2 rounded-tl-xl transition-colors duration-[.3s]">
                        <a href={project.repoUrl} target="_blank" className="bg-primary rounded-md text-background p-2 hover:scale-110 transition-all">
                            <Code className="w-[24px]"/>
                        </a>

                        <a href={project.url} target="_blank" className={`p-2 rounded-md ${project.url ? "bg-primary text-background hover:scale-110 transition-all" : "bg-[#E5E5E5] text-[#AFAFAF] cursor-default pointer-events-none"}`}>
                            <Link className="w-[24px]"/>
                        </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;