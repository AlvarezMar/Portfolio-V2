import { projects } from "../utils/projects"
import ProjectCard from "../components/ProjectCard";

function Projects(){

    return (
        <>
        <section className="max-w-[1200px] mx-auto mb-24 px-2 sm:px-10" id="Projects">
            <div className="flex place-items-center mb-8">
                <hr className="w-full mx-5 border-t-2"/>
                <h1 className="text-6xl font-extrabold whitespace-nowrap">Projects<span className="text-accent">.</span></h1>
            </div>

            <div className="flex flex-col place-items-center gap-5">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title}/>
                ))}
            </div>
        </section>
        </>
    )
}

export default Projects;