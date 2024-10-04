import { socials } from "../utils/socials";
import logo from "/logo.png"

function Footer(){

    return (
        <>
        <footer className="divide-y-2 dark:divide-hr_dark p-2 max-w-[1200px] mx-auto">
            <div className="flex justify-between py-4">
                <div className="flex gap-10 place-items-center">
                    <a href="#">
                        <img src={logo} alt="Juan Carlos's logo, full stack developer" width="34px"/>
                    </a>

                    <ul className="flex font-bold gap-6">
                        <li className="hover:text-accent transition-all">
                            <a href="#">Home</a>
                        </li>

                        <li className="hover:text-accent transition-all">
                            <a href="https://docs.google.com/document/d/1UHZOjRkxEIEBW9Y9de9hTC_9kTX0YRyYtyTjBs69r3k/edit?usp=sharing" target="_blank">Download CV</a>
                        </li>
                    </ul>
                </div>
                
                <ul className="flex gap-5">
                    {socials.map((link) => (
                        <li key={link.socialMedia}>
                            <a href={link.link} target="_blank">
                                <link.imgSrc width="24px" className="hover:scale-110 transition-all"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-5">
                <span className="text-[#c5c2c2] dark:text-hr_dark">&copy; 2024. Juan Carlos Alvarez | Portfolio V2.</span>
            </div>
        </footer>
        </>
    )
}

export default Footer;