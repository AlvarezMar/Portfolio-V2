import logo from "/logo.png"

function Sidebar(){

    const navMenu = ["Home", "Experience", "Projects", "About", "Contact"]

    return(
        <>
        <aside className="bg-[#323232] flex flex-col gap-2 items-center w-[60px] h-screen mr-auto">
            <div className="pt-4">
                <a href="#">
                    <img src={logo} alt="Juan Carlos's Logo, Full Stack Developer" width="40px"/>
                </a>
            </div>

            <ul className="flex flex-col">
                {navMenu.map((element) => (
                    <li key={element} className="text-[#AFAFAF] text-xl font-light" style={{writingMode:"vertical-rl", textOrientation:"mixed"}}>
                        <button className= "px-3.5 py-4 border-r-2 border-[#323232] hover:text-[#323232] hover:border-[#FFB552] hover:bg-[#d1cece] transition-colors">
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