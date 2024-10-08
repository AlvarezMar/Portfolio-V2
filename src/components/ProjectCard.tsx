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
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[2fr_1fr] items-center gap-6 border-[3px] rounded-lg border-container dark:border-container_dark p-4 lg:p-9 max-w-[60rem]">

            <div className="flex flex-col gap-3 pt-5">
                <h3 translate="no" className="text-3xl font-semibold transition-colors duration-75">{project.title}</h3>
      
                <h3 className="mx-2 mb-3 duration-75 text-secondary dark:text-secondary_dark">{project.previewDescription}</h3>

                <div className="flex flex-wrap gap-1">
                    {project.tecnologies.map((tech) => (
                        <ProjectTag tecnologies={tech} key={tech}/>
                    ))}
                </div>

                <span onClick={() => onOpenModal(project)} className="text-accent hover:underline mb-0 mt-7 lg:mt-2 cursor-pointer">Discover more &#11166;</span>
            </div>

            <div className="lg:w-[22rem] lg:h-[245px] rounded-lg overflow-hidden relative">
                <img src={project.imgUrl} alt="" onClick={() => onOpenModal(project)} className="w-full h-auto object-cover object-top max-h-[245px] cursor-pointer transition-all hover:scale-110"/>

                <div className="flex flex-col gap-2 absolute right-0 bottom-0 bg-background dark:bg-background_dark pt-2 pl-2 rounded-tl-xl transition-colors duration-[.3s]">
                    <a href={project.repoUrl} target="_blank" data-tooltip-id="code" className="bg-primary rounded-md text-background p-2 hover:scale-110 transition-all">
                        <Code className="w-[24px]"/>
                    </a>

                    <a href={project.url} target="_blank" data-tooltip-id="link" className={`p-2 rounded-md hover:scale-110 transition-all ${project.url ? "bg-primary text-background" : "bg-[#E5E5E5] text-[#AFAFAF] cursor-default pointer-events-none"}`}>
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