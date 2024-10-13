import { Timeline } from "flowbite-react";
import { experience } from "../utils/experience";

function Experience(){

    return (
        <>
        <section className="max-w-[1200px] mx-auto mt-10 mb-24 px-4 sm:px-10" id="Experience">
            <div className="flex place-items-center mb-8">
                <h1 className="text-[51px] lg:text-6xl font-extrabold">Experience<span className="text-accent">.</span></h1>
                <hr className="w-full mx-5 border-t-2 dark:border-hr_dark"/>
            </div>

            <div className="mx-2 lg:mx-10">
                <Timeline className="transition-colors duration-300">

                    {experience.map((job) => (
                        <Timeline.Item className="transition-colors duration-300" key={job.positionAndCompany}>
                            <Timeline.Point className="point"/> 
                            <Timeline.Content>
                                <Timeline.Time className="text-tertiary">{job.date}</Timeline.Time>
                                <Timeline.Title className="lg:text-xl text-primary transition-colors duration-300">{job.positionAndCompany}</Timeline.Title>
                                <Timeline.Body className="text-secondary dark:text-secondary_dark transition-colors duration-300">{job.description}</Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                    
                </Timeline>
            </div>
        </section>
        </>
    )
}

export default Experience;