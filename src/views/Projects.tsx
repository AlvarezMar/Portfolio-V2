import ProjectCard from "../components/ProjectCard";

function Projects(){

    const projects = [
        {
            title: "YouDrive",
            description: "Collaborative application for managing vehicle rental information. This application allows users to post, modify vehicles, and manage rental processes.",
            tecnologies: ["NestJS", "Next.js", "Tailwind", "PostgreSQL", "TypeScript"],
            imgUrl: "https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203034/youDrive_dw21hi.png",
            repoUrl: "https://github.com/maccari78/PM6-grupo3",
            url: 'https://youdrive.vercel.app/',
        },
        {
            title: "Doña Diabla",
            description: "This restaurant project provides a platform for users to register, log in, schedule appointments, and delete them as needed.",
            tecnologies: ["React", "Redux", "JavaScript", "TypeScript", "Express"],
            imgUrl: "https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203128/Do%C3%B1a_Diabla_v1_fkav1i.png",
            repoUrl: "https://github.com/AlvarezMar/Dona-Diabla",
            url: "",
            
        },
        {
            title: "Movloom",
            description: "This movie website allows user to explore movie information, add new movies through a form, and store information in a database.",
            tecnologies: ["JavaScript", "Express", "MongoDB", "Mongoose"],
            imgUrl: "https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203131/MovLoom_v1_xwayle.png",
            repoUrl: "https://github.com/AlvarezMar/MovLoom",
            url: "",
        }
    ]

    return (
        <>
        <section className="max-w-[1200px] mx-auto px-2 sm:px-10">
            <div className="flex place-items-center mb-8">
                <hr className="w-full mx-5 border-t-2"/>
                <h1 className="text-6xl font-extrabold whitespace-nowrap">Projects<span className="text-accent">.</span></h1>
            </div>

            <div className="flex flex-col place-items-center gap-5">
                {projects.map((project) => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </section>
        </>
    )
}

export default Projects;