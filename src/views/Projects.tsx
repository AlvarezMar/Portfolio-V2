import { useState } from "react";
import { Project } from "../utils/projects"
import { useTranslation } from "react-i18next";

import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";

import close from "../assets/svg/elements/close.svg"

interface project {
    "title": string,
    "previewDescription": string,
    "fullDescription": string[],
    "tecnologies": string[],
    "imgUrl": string,
    "repoUrl": string,
    "url": string
}

function Projects(){

    const { t } = useTranslation();
    const projects = t('projects.projectList', {returnObjects: true}) as project[]

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const handleOpenModal = (project: Project): void => {
        setSelectedProject(project)
        history.pushState(null, '', `#${project.title}`)
        document.body.style.overflow = 'hidden'
    }

    const handleCloseModal = (): void => {
        setSelectedProject(null)
        history.pushState(null, '', `#Projects`)
          document.body.style.overflow = 'auto'
    }

    return (
        <>
        <section className="max-w-[1200px] mx-auto mb-24 px-4 sm:px-10" id="Projects">
            <div className="flex place-items-center mb-8">
                <hr className="w-full mx-5 border-t-2 dark:border-hr_dark"/>
                <h1 className="text-[55px] font-extrabold whitespace-nowrap">{t('projects.heading')}<span className="text-accent">.</span></h1>
            </div>

            <div className="flex flex-col place-items-center gap-5">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} onOpenModal={handleOpenModal}/>
                ))}
            </div>
        </section>

        {selectedProject && (
                <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-20 z-50 overflow-y-auto">
                    <div onClick={handleCloseModal} className="flex flex-col-reverse lg:flex-row justify-center mb-7 lg:mb-0 mx-3 md:mx-[4rem] lg:mt-16 m-2 lg:m-10 gap-2 lg:gap-1">
                        <ProjectDetail project={selectedProject}/>
                        <div className="flex cursor-pointer bg-primary rounded-full transition-all hover:scale-110 p-2 w-7 h-7 mr-0 ml-auto lg:ml-0">
                            <img src={close} alt="" width="20px"/>
                        </div>
                    </div>
                </div>
        )}
        </>
    )
}

export default Projects;