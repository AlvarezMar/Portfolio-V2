import { socials } from "../utils/socials";
import { Tooltip } from "react-tooltip";

import logo from "/logo.png"
import { useTranslation } from "react-i18next";

function Footer(){

    const { t } = useTranslation();

    return (
        <>
        <footer className="p-2 max-w-[1200px] mx-auto transition-colors">
            <div className="flex justify-between py-2 lg:py-4">
                <div className="flex gap-3 lg:gap-10 place-items-center">
                    <a href="#">
                        <img src={logo} alt="Juan Carlos's logo, full stack developer" className="w-[24px] lg:w-[34px]"/>
                    </a>

                    <ul className="flex font-bold gap-3 lg:gap-6 text-sm lg:text-base">
                        <li className="hover:text-accent">
                            <a className="duration-150" href="#">{t('menusAndHome.menu.0.menuLabel')}</a>
                        </li>

                        <li className="hover:text-accent">
                            <a className="duration-150" href="https://docs.google.com/document/d/1UHZOjRkxEIEBW9Y9de9hTC_9kTX0YRyYtyTjBs69r3k/edit?usp=sharing" target="_blank">{t('menusAndHome.cv_button')}</a>
                        </li>
                    </ul>
                </div>
                
                <ul className="flex gap-3 lg:gap-5">
                    {socials.map((link) => (
                        <li key={link.socialMedia}>
                            <a href={link.link} target="_blank" data-tooltip-id={`_${link.socialMedia}`}>
                                <link.imgSrc className="hover:scale-110 transition-scale w-[20px] lg:w-[24px]"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="w-full border-t-2 dark:border-hr_dark"/>

            <div className="p-2 lg:p-5 lg:text-end">
                <span className="text-[#c5c2c2] dark:text-hr_dark text-sm lg:text-base">&copy; 2024. Juan Carlos Alvarez | Portfolio V2.</span>
            </div>
        </footer>

        {socials.map((link) => (
            <Tooltip id={`_${link.socialMedia}`} key={`_${link.socialMedia}`} content={link.socialMedia} place="bottom-end" opacity="1" style={{fontFamily: 'monospace', padding: '.3rem .8rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem'}}/>
        ))}
        </>
    )
}

export default Footer;