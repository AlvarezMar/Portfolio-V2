import { techStack } from "../utils/techStack";

function TechStack(){

    return (
        <>
        <section className="flex flex-wrap justify-center gap-5 mx-10">

            {techStack.map((tech) => (
                <div key={tech.section}>
                    <h2 className="font-bold text-lg text-center">{tech.section}</h2>

                    <div className="grid grid-cols-3 grid-rows-3 gap-2 border-[#EEEEEE] border-[3px] rounded-3xl p-4 w-48 mx-auto">
                        {tech.sectionTech.map((section) => (
                            <img src={section.tech} alt={`${section.name} logo`} key={section.name}/>
                        ))}

                    </div>
                </div>
            ))}
        </section>
        </>
    )
}

export default TechStack;