import TechStack from "../components/TechStack";

function About(){

    return (
        <>
        <section className="max-w-[1200px] mx-auto px-2">
            <div className="flex flex-col gap-4">
                <div className="flex place-items-center">
                    <h1 className="text-6xl font-bold">About<span className="text-accent">.</span></h1>
                    <hr  className="w-full mx-5"/>
                </div>

                <div className="flex flex-col gap-4 mx-5">
                    <h2 className="text-2xl">Hey! I'm <span className="text-accent">Juan Carlos Alvarez Martínez</span>...</h2>

                    <div className="flex flex-col gap-4">
                        <p>A passionate software developer who loves turning complex problems into simple, elegant solutions. My journey in the tech world is driven by curiosity, creativity, and a constant desire to learn and grow.</p>

                        <p>I am a versatile software developer with a solid technical background and hands-on experience in programming and information technology. My experience in electromechanical maintenance has equipped me with meticulous attention to detail and exceptional problem-solving skills, which I now apply to software development projects.</p>

                    </div>
                    <span className="font-bold">My current tech stack is:</span>

                    <TechStack/>
                </div>

            </div>
        </section>
        </>
    )
}

export default About;