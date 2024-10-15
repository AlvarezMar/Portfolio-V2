import { socials } from "../utils/socials";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

import Status from "../components/Status";
import send from "../assets/svg/elements/send.svg"
import profilePicture from "../assets/images/profilePicture.webp"

function Home(){

    const { t } = useTranslation();

    return (
        <>
        <section className="max-w-[1200px] mx-auto px-4 flex flex-col-reverse lg:grid lg:grid-cols-[1fr_auto] place-items-center gap-9 lg:h-screen pb-24 lg:pb-52">
            <div className="lg:text-end">
                <h1 translate="no" className="text-[65px] lg:text-9xl font-extrabold lg:font-[900] leading-[4rem] lg:leading-[6.5rem] pb-1 lg:py-5">Fullstack Developer</h1>
                <span className="text-3xl font-bold">{t('menusAndHome.location.prefix')}<span className="text-accent">{t('menusAndHome.location.city')}</span></span>                
                <p className="lg:ml-[17rem] mt-6 lg:mt-1 text-secondary dark:text-secondary_dark">{t('menusAndHome.welcome')}</p>

                <div className="flex flex-row-reverse lg:flex-row place-items-center gap-5 my-2 lg:my-0">
                    <ul className="flex gap-6 lg:gap-5 lg:ml-16 px-2">
                        {socials.map((link) => (
                            <li key={link.socialMedia}>
                                <a href={link.link} target="_blank" data-tooltip-id={link.socialMedia}>
                                    <link.imgSrc className="hover:scale-110 transition-scale w-[26px] lg:w-[30px]"/>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <hr className="w-full border-t-2 dark:border-hr_dark"/>
                </div>
                
                <div className="flex justify-end">
                    <a href="#Contact" className="inline-flex gap-2 bg-primary text-background p-3 rounded-xl mt-3 lg:mt-1 mr-2 hover:scale-105 transition-all">{t('menusAndHome.contactButton')}
                        <img src={send} alt="Send icon to send a new email" width="20px"/>
                    </a>
                </div>
            
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