import { techStack } from "../utils/techStack";
import { Tooltip } from "react-tooltip";

function TechStack(){

    return (
        <>
        <section className="flex flex-wrap justify-center gap-5 mx-0">

            {techStack.map((tech) => (
                <div key={tech.section}>
                    <h2 className="font-bold text-lg text-center">{tech.section}</h2>

                    <div className="grid grid-cols-3 grid-rows-3 gap-2 border-container dark:border-container_dark border-[3px] rounded-3xl p-4 w-48 mx-auto">
                        {tech.sectionTech.map((section) => (
                            <img src={section.tech} alt={`${section.name} logo`} key={section.name} data-tooltip-id={section.name}/>
                        ))}

                    </div>
                </div>
            ))}
        </section>

        {techStack.map((tech) => (
            tech.sectionTech.map((section) => (
                <Tooltip id={section.name} key={section.name} content={section.name} opacity="1" style={{fontFamily: 'monospace', padding: '.3rem .7rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem'}}/>
            ))
        ))}
        </>
    )
}

export default TechStack;