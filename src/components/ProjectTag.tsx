interface ProjectTagProps {
    tecnologies: string
}

function ProjectTag({tecnologies}: ProjectTagProps){
    
    return (
        <>
        <span className="bg-tag text-tagText font-mono font-bold text-[.7rem] py-[.22rem] px-2 rounded-full">#{tecnologies}</span>
        </>
    )
}

export default ProjectTag