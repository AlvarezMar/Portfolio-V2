import { Project } from "../utils/projects";
import { Tooltip } from "react-tooltip";

import ProjectTag from "./ProjectTag";

import Code from "../assets/svg/elements/code.svg?react"
import Link from "../assets/svg/elements/link.svg?react"

interface ProjectCardProps {
    project: Project;
    onOpenModal: (project: Project) => void;
}

function ProjectCard({project, onOpenModal}: ProjectCardProps){
    
    return (
        <>
        <div className="grid grid-cols-[2fr_1fr] items-center gap-6 border-[3px] rounded-lg border-container dark:border-container_dark p-9 w-[60rem]">

            <div className="flex flex-col gap-3 pt-5">
                <h3 translate="no" className="text-3xl font-semibold transition-colors duration-75">{project.title}</h3>
      
                <h3 className="mx-2 mb-3 duration-75">{project.previewDescription}</h3>

                <div className="flex flex-wrap gap-1">
                    {project.tecnologies.map((tech) => (
                        <ProjectTag tecnologies={tech} key={tech}/>
                    ))}
                </div>

                <span onClick={() => onOpenModal(project)} className="text-accent hover:underline mb-0 mt-2 cursor-pointer">Discover more &#11166;</span>
            </div>

            <div className="w-[22rem] h-[245px] relative">
                <img src={project.imgUrl} alt="" onClick={() => onOpenModal(project)} className="rounded-lg w-full h-auto object-cover object-top max-h-[245px] cursor-pointer"/>

                <div className="flex flex-col gap-2 absolute right-0 bottom-0 bg-background dark:bg-background_dark pt-2 pl-2 rounded-tl-xl transition-colors duration-[.3s]">
                        <a href={project.repoUrl} target="_blank" data-tooltip-id="code" className="bg-primary rounded-md text-background p-2 hover:scale-110 transition-all">
                            <Code className="w-[24px]"/>
                        </a>

                        <a href={project.url} target="_blank" data-tooltip-id="link" className={`p-2 rounded-md ${project.url ? "bg-primary text-background hover:scale-110 transition-all" : "bg-[#E5E5E5] text-[#AFAFAF] cursor-default pointer-events-none"}`}>
                            <Link className="w-[24px]"/>
                        </a>
                </div>
            </div>
        </div>

        <Tooltip id="code" content="Source Code" opacity="1" place="right" style={{fontFamily: 'monospace', padding: '.3rem .8rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem', zIndex: '60'}}/>
        <Tooltip id="link" content="Live Project" opacity="1" place="right" style={{fontFamily: 'monospace', padding: '.3rem .8rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem', zIndex: '60'}}/>
        </>
    )
}

export default ProjectCard;