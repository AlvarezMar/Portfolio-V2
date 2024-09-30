import logo from "/logo.png"

function Sidebar(){

    const navMenu = ["Home", "Experience", "Projects", "About", "Contact"]

    return(
        <>
        <aside className="bg-primary flex flex-col gap-2 items-center w-[60px] h-screen mr-auto sticky top-0">
            <div className="pt-5 pb-4">
                <a href="#">
                    <img src={logo} alt="Juan Carlos's logo, full stack developer" width="40px"/>
                </a>
            </div>

            <ul className="flex flex-col">
                {navMenu.map((element) => (
                    <li key={element} className="text-[#AFAFAF] text-xl font-light" style={{writingMode:"vertical-rl", textOrientation:"mixed"}}>
                        <button 
                            className= "px-3.5 py-4 border-r-2 border-primary hover:text-primary hover:border-accent hover:bg-[#d1cece] transition-colors">
                            {element}    
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
        </>
    )

}

export default Sidebar;