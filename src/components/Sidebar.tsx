import logo from "/logoWhite.png"

function Sidebar(){

    const navMenu = ["Home", "Experience", "Projects", "About", "Contact", "Blog"]

    return(
        <>
        <aside className="bg-primary flex flex-col gap-2 items-center w-[35px] lg:w-[60px] h-screen mr-auto sticky top-0 rounded-r-3xl z-20 overflow-hidden">
            <div className="pt-5">
                <a href="#">
                    <img src={logo} alt="Juan Carlos's logo, full stack developer" className="w-[25px] lg:w-[40px]"/>
                </a>
            </div>

            <ul className="flex flex-col pt-5 pb-36" id="links">
                {navMenu.map((element) => (
                    <li key={element} className="text-[#AFAFAF] text-sm lg:text-xl font-light" style={{writingMode:"vertical-rl", textOrientation:"mixed"}}>
                        <a href={element == "Home" ? "#" : `#${element}`}
                            className="px-[6px] lg:px-3.5 py-2.5 lg:py-4 border-r-2 border-primary hover:text-primary dark:hover:text-primary_dark hover:border-accent hover:bg-[#e6e4e4] dark:hover:bg-background_dark transition-colors">
                            {element}    
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
        </>
    )

}

export default Sidebar;