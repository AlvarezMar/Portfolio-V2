import logo from "/logo.png"

import linkedin from "../assets/svg/socials/linkedin.svg"
import github from "../assets/svg/socials/github.svg"
import instagram from "../assets/svg/socials/instagram.svg"
import email from "../assets/svg/socials/email.svg"

function Footer(){

    const socials = [
        {
            socialMedia: "LinkedIn",
            imgSrc: linkedin,
            link: "https://linkedin.com/in/alvarezmajuan"
        },
        {
            socialMedia: "Github",
            imgSrc: github,
            link: "https://github.com/AlvarezMar"
        },
        {
            socialMedia: "Instagram",
            imgSrc: instagram,
            link: "https://www.instagram.com/juan_alvarezmar/"
        },
        {
            socialMedia: "Email",
            imgSrc: email,
            link: "mailto:alvarez.majuan@hotmail.com"
        }
    ]

    return (
        <>
        <footer className="divide-y-2 divide-container p-2 max-w-[1200px] mx-auto">
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
                                <img src={link.imgSrc} alt={`${link.socialMedia} icon linking to Juan Carlos's profile`} width="24px" className="hover:scale-110 transition-all"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-5">
                <span className="text-[#c5c2c2]">&copy; 2024. Juan Carlos Alvarez | Portfolio V2.</span>
            </div>
        </footer>
        </>
    )

}

export default Footer;