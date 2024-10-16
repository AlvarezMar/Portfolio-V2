import { useTranslation } from "react-i18next";

import logo from "/logoWhite.png"

interface menuItem {
    "menuLabel": string
    "menuItemId": string
}

function Sidebar(){

    const { t } = useTranslation();
    const navMenu = t('menusAndHome.menu', {returnObjects: true}) as menuItem[];
    
    return(
        <aside className="bg-primary flex flex-col gap-2 items-center w-[43px] lg:w-[60px] h-screen mr-auto sticky top-0 rounded-r-3xl z-20 overflow-hidden">
            <div className="pt-5">
                <a href="#">
                    <img src={logo} alt="Juan Carlos's logo, full stack developer" className="w-[30px] lg:w-[40px]"/>
                </a>
            </div>

            <ul className="flex flex-col pt-5 pb-36" id="links">
                {navMenu.map((element) => (
                    <li key={element.menuItemId} className="text-[#AFAFAF] lg:text-xl font-light" style={{writingMode:"vertical-rl", textOrientation:"mixed"}}>
                        <a href={element.menuItemId == "Home" ? "#" : `#${element.menuItemId}`}
                            className="px-[9px] lg:px-3.5 py-2.5 lg:py-4 border-r-2 border-primary hover:text-primary dark:hover:text-primary_dark hover:border-accent hover:bg-[#e6e4e4] dark:hover:bg-background_dark transition-colors">
                            {element.menuLabel}    
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar;