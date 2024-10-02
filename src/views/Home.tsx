import profilePicture from "../assets/images/profilePicture.webp"

import { socials } from "../utils/socials";

function Home(){
    
    return (
        <>
        <section className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto] place-items-center gap-10">
            <div className="text-end">
                <h1 className="text-9xl font-[900] leading-[6.5rem] py-5">Fullstack Developer</h1>
                <span className="text-3xl font-bold">Based in Mexico City.</span>                
                <p className="ml-72 mt-1">Welcome to my portfolio that transcends time and space. Discover the artistry of code and innovation, crafted to create seamless digital experiences.</p>

                <div className="grid grid-cols-[auto_1fr] place-items-center gap-5">
                    <ul className="flex gap-5 ml-16">
                        {socials.map((link) => (
                            <li key={link.socialMedia}>
                                <a href={link.link} target="_blank">
                                    <img src={link.imgSrc} alt={`${link.socialMedia} icon linking to Juan Carlos's profile`} width="30px" className="hover:scale-110 transition-all"/>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <hr className="w-full border-t-2" />
                </div>
                
                <a href="#Contact" className="inline-block bg-primary text-background p-2.5 rounded-md mt-1 hover:scale-105 transition-all">Contact me</a>
            </div>

            <div>
                <img src={profilePicture} alt="Picture of Juan Carlos Alvarez"/>
            </div>
        </section>
        </>
    )
}

export default Home;