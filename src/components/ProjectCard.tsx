import ProjectTag from "./ProjectTag";

import Code from "../assets/svg/elements/code.svg?react"
import Link from "../assets/svg/elements/link.svg?react"

function ProjectCard({project}){
    
    return (
        <>
        <div className="grid grid-cols-[2fr_1fr] gap-6 border-[3px] rounded-lg border-container p-9 w-[60rem]">

            <div className="flex flex-col gap-3 pt-5">
                <div className="flex place-items-center justify-between">
                    <h2 className="text-3xl font-semibold">{project.title}</h2>

                    {/* <div className="flex gap-2">
                        <a href={project.repoUrl} target="_blank" className="bg-primary rounded-md text-background p-2 hover:scale-105 transition-all">
                            <Code className="w-[24px]"/>
                        </a>

                        <a href={project.url} target="_blank" className={`p-2 rounded-md ${project.url ? "bg-primary text-background hover:scale-105 transition-all" : "bg-[#E5E5E5] text-[#AFAFAF] cursor-default"}`}>
                            <Link className="w-[24px]"/>
                        </a>
                    </div> */}

                </div>
                <p className="mx-2 mb-3">{project.description}</p>

                <div className="flex gap-1">
                    {project.tecnologies.map((tech) => (
                        <ProjectTag tecnologies={tech} key={tech}/>
                    ))}
                </div>

                <span className="text-accent hover:underline mb-0 mt-auto">Learn more &#11166;</span>
            </div>

            <div className="w-[22rem] relative">
                <img src={project.imgUrl} alt="" className="rounded-lg w-full h-auto object-cover object-top max-h-[244px]"/>

                <div className="flex flex-col gap-2 absolute right-0 bottom-0 bg-background pt-2 pl-2 rounded-tl-xl">
                        <a href={project.repoUrl} target="_blank" className="bg-primary rounded-md text-background p-2 hover:scale-105 transition-all">
                            <Code className="w-[24px]"/>
                        </a>

                        <a href={project.url} target="_blank" className={`p-2 rounded-md ${project.url ? "bg-primary text-background hover:scale-105 transition-all" : "bg-[#E5E5E5] text-[#AFAFAF] cursor-default"}`}>
                            <Link className="w-[24px]"/>
                        </a>
                    </div>
            </div>

        </div>

        </>
    )
}

export default ProjectCard;