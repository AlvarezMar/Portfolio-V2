import { Timeline } from "flowbite-react";

function Experience(){

    return (
        <>
        <section className="max-w-[1200px] mx-auto mt-10 mb-24 px-2 sm:px-10" id="Experience">
            <div className="flex place-items-center mb-8">
                <h1 className="text-6xl font-extrabold">Experience<span className="text-accent">.</span></h1>
                <hr className="w-full mx-5 border-t-2 dark:border-hr_dark"/>
            </div>

            <div className="mx-8 lg:mx-10">
                <Timeline>
                    <Timeline.Item>
                        <div className="group-hover:bg-red-500">
                    <Timeline.Point className="text-accent"/> 

                        </div>
                    <Timeline.Content>
                        <Timeline.Time className="text-secondary">August 2023</Timeline.Time>
                        <Timeline.Title className="text-xl text-primary">Full Stack Web Developer. Henry Bootcamp.</Timeline.Title>
                        <Timeline.Body className="text-primary">
                        Completed over 800 hours of theoretical and practical coursework, involving the creation of various projects and learning multiple technologies. Gained hands-on experience in software development, including front-end and back-end programming, version control, and collaborative coding practices.
                        </Timeline.Body>
                    </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                    <Timeline.Point className="text-accent"/>
                    <Timeline.Content>
                        <Timeline.Time className="text-secondary">July 2022</Timeline.Time>
                        <Timeline.Title className="text-xl text-primary">Electromechanical Maintenance. Mexico Aviation School.</Timeline.Title>
                        <Timeline.Body className="text-primary">
                        Oil change in hydraulic actuators of the flight simulator. Wiring of panel instruments for a new flight simulator. Implementation of Arduino code for instrument calibration with potentiometers when the flight simulator is turned on. Support to other areas with office-related tasks.
                        </Timeline.Body>
                    </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                    <Timeline.Point/>
                    <Timeline.Content>
                        <Timeline.Time className="text-secondary">May 2021</Timeline.Time>
                        <Timeline.Title className="text-xl text-primary">Mechanical Maintenance. Minigrip Mexico.</Timeline.Title>
                        <Timeline.Body className="text-primary">
                        Cleaning and maintenance of industrial machinery. Support to operators to ensure the proper functioning of their machines. Lubrication as part of industrial maintenance and implementation of a schedule to keep a record of this process. Task planning and support to other departments.
                        </Timeline.Body>
                    </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </section>
        </>
    )

}

export default Experience;