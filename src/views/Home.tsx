import { socials } from "../utils/socials";
import { Tooltip } from "react-tooltip";

import Status from "../components/Status";
import send from "../assets/svg/elements/send.svg"
import profilePicture from "../assets/images/profilePicture.webp"

function Home(){

    return (
        <>
        <section className="max-w-[1200px] mx-auto px-2 grid grid-cols-[1fr_auto] place-items-center gap-9 h-screen pb-52">
            <div className="text-end">
                <h1 translate="no" className="text-9xl font-[900] leading-[6.5rem] py-5">Fullstack Developer</h1>
                <span className="text-3xl font-bold">Based in <span className="text-accent">Mexico City.</span></span>                
                <p className="ml-[17rem] mt-1 text-secondary dark:text-secondary_dark">Welcome to my portfolio that transcends time and space. Discover the artistry of code and innovation, crafted to create seamless digital experiences.</p>

                <div className="grid grid-cols-[auto_1fr] place-items-center gap-5">
                    <ul className="flex gap-5 ml-16">
                        {socials.map((link) => (
                            <li key={link.socialMedia}>
                                <a href={link.link} target="_blank" data-tooltip-id={link.socialMedia}>
                                    <link.imgSrc width="30px" className="hover:scale-110 transition-scale"/>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <hr className="w-full border-t-2 dark:border-hr_dark"/>
                </div>
                
                <a href="#Contact" className="inline-flex place-items-center gap-2 bg-primary text-background p-2.5 rounded-md mt-1 hover:scale-105 transition-all">Contact me
                    <img src={send} alt="Send icon to send a new email" width="20px" />
                </a>
            </div>

            <div className="relative">
                <img src={profilePicture} alt="Picture of Juan Carlos Alvarez"/>
                <Status/>
            </div>
        </section>

        {socials.map((link) => (
            <Tooltip id={link.socialMedia} key={link.socialMedia} content={link.socialMedia} offset={15} opacity="1" style={{fontFamily: 'monospace', padding: '.3rem .8rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem'}}/>
        ))}
        </>
    )
}

export default Home;