interface ProjectTagProps {
    tecnologies: string
}

function ProjectTag({tecnologies}: ProjectTagProps){
    
    return (
        <>
        <span translate="no" className="bg-tag dark:bg-tag_dark text-tagText font-mono font-bold text-[.7rem] py-[.22rem] px-2 rounded-full transition-colors duration-300">#{tecnologies}</span>
        </>
    )
}

export default ProjectTag